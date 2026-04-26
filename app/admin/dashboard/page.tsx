"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientForm } from "@/components/admin/client-form"
import { EmployeeForm } from "@/components/admin/employee-form"
import { DataTable } from "@/components/admin/data-table"
import { Plus, LogOut } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [clients, setClients] = useState([])
  const [employees, setEmployees] = useState([])
  const [managers, setManagers] = useState([])
  const [messages, setMessages] = useState([])
  const [showClientForm, setShowClientForm] = useState(false)
  const [editingClient, setEditingClient] = useState(null)
  const [showEmployeeForm, setShowEmployeeForm] = useState(false)
  const [editingEmployee, setEditingEmployee] = useState(null)
  const [showManagerForm, setShowManagerForm] = useState(false)
  const [editingManager, setEditingManager] = useState(null)

  const clientColumns = [
    { key: "clientName", label: "Client Name" },
    { key: "from", label: "From", type: "date" },
    { key: "to", label: "To", type: "date" },
    { key: "summary", label: "Summary" },
  ]

  const employeeColumns = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "role", label: "Role" },
    { key: "salary", label: "Salary" },
    { key: "from", label: "From", type: "date" },
    { key: "to", label: "To", type: "date" },
  ]

  const messageColumns = [
    { key: "email", label: "Email" },
    { key: "phone_number", label: "Phone Number" },
    { key: "message", label: "Message" },
    { key: "createdAt", label: "Submitted On", type: "date" },
  ]

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth/verify")
      const data = await res.json()

      if (!data.authenticated) {
        router.push("/admin")
      } else {
        setAuthenticated(true)
      }
    } catch (error) {
      router.push("/admin")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/admin")
  }

  useEffect(() => {
    if (authenticated) {
      fetchClients()
      fetchEmployees()
      fetchManagers()
      fetchMessages()
    }
  }, [authenticated])

  const fetchClients = async () => {
    try {
      const res = await fetch("/api/clients")
      const data = await res.json()
      setClients(data.success ? data.data : [])
    } catch (error) {
      console.error("[v0] Error fetching clients:", error)
      setClients([])
    }
  }

  const fetchEmployees = async () => {
    try {
      const res = await fetch("/api/employees")
      const data = await res.json()
      setEmployees(data.success ? data.data : [])
    } catch (error) {
      console.error("[v0] Error fetching employees:", error)
      setEmployees([])
    }
  }

  const fetchManagers = async () => {
    try {
      const res = await fetch("/api/managers")
      const data = await res.json()
      setManagers(data.success ? data.data : [])
    } catch (error) {
      console.error("[v0] Error fetching managers:", error)
      setManagers([])
    }
  }

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages")
      const data = await res.json()
      setMessages(data.success ? data.data : [])
    } catch (error) {
      console.error("[v0] Error fetching messages:", error)
      setMessages([])
    }
  }

  const handleClientSubmit = async (client) => {
    try {
      const formData = new FormData()
      Object.keys(client).forEach((key) => {
        if (client[key]) formData.append(key, client[key])
      })

      const url = editingClient ? `/api/clients/${editingClient._id}` : "/api/clients"
      const method = editingClient ? "PUT" : "POST"

      await fetch(url, {
        method,
        body: formData,
      })

      fetchClients()
      setShowClientForm(false)
      setEditingClient(null)
    } catch (error) {
      console.error("[v0] Error submitting client:", error)
    }
  }

  const handleEmployeeSubmit = async (employee) => {
    try {
      const url = editingEmployee ? `/api/employees/${editingEmployee._id}` : "/api/employees"
      const method = editingEmployee ? "PUT" : "POST"

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      })

      fetchEmployees()
      setShowEmployeeForm(false)
      setEditingEmployee(null)
    } catch (error) {
      console.error("[v0] Error submitting employee:", error)
    }
  }

  const handleManagerSubmit = async (manager) => {
    try {
      const url = editingManager ? `/api/managers/${editingManager._id}` : "/api/managers"
      const method = editingManager ? "PUT" : "POST"

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(manager),
      })

      fetchManagers()
      setShowManagerForm(false)
      setEditingManager(null)
    } catch (error) {
      console.error("[v0] Error submitting manager:", error)
    }
  }

  const handleDeleteClient = async (clientId) => {
    if (confirm("Are you sure you want to delete this client?")) {
      try {
        await fetch(`/api/clients/${clientId}`, { method: "DELETE" })
        fetchClients()
      } catch (error) {
        console.error("[v0] Error deleting client:", error)
      }
    }
  }

  const handleDeleteEmployee = async (employeeId) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      try {
        await fetch(`/api/employees/${employeeId}`, { method: "DELETE" })
        fetchEmployees()
      } catch (error) {
        console.error("[v0] Error deleting employee:", error)
      }
    }
  }

  const handleDeleteManager = async (managerId) => {
    if (confirm("Are you sure you want to delete this manager?")) {
      try {
        await fetch(`/api/managers/${managerId}`, { method: "DELETE" })
        fetchManagers()
      } catch (error) {
        console.error("[v0] Error deleting manager:", error)
      }
    }
  }

  const handleDeleteMessage = async (messageId) => {
    if (confirm("Are you sure you want to delete this message?")) {
      try {
        await fetch(`/api/messages/${messageId}`, { method: "DELETE" })
        fetchMessages()
      } catch (error) {
        console.error("[v0] Error deleting message:", error)
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!authenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage clients, employees, managers, and contact messages</p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="bg-white text-black border-zinc-200 hover:bg-zinc-100"
              onClick={() => router.push("/")}
            >
              Back to Home
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="bg-zinc-900 border border-zinc-700 h-12 p-1">
            <TabsTrigger
              value="clients"
              className="px-4 text-zinc-300 hover:text-white data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Clients
            </TabsTrigger>
            <TabsTrigger
              value="employees"
              className="px-4 text-zinc-300 hover:text-white data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Employees
            </TabsTrigger>
            <TabsTrigger
              value="managers"
              className="px-4 text-zinc-300 hover:text-white data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Managers
            </TabsTrigger>
            <TabsTrigger
              value="messages"
              className="px-4 text-zinc-300 hover:text-white data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="clients" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Clients</h2>
              <Button
                onClick={() => {
                  setShowClientForm(!showClientForm)
                  setEditingClient(null)
                }}
                className="bg-white text-black hover:bg-gray-200"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Client
              </Button>
            </div>

            {showClientForm && (
              <ClientForm
                onSubmit={handleClientSubmit}
                initialData={editingClient}
                onCancel={() => {
                  setShowClientForm(false)
                  setEditingClient(null)
                }}
              />
            )}

            <DataTable
              data={clients}
              columns={clientColumns}
              onEdit={(client) => {
                setEditingClient(client)
                setShowClientForm(true)
              }}
              onDelete={handleDeleteClient}
            />
          </TabsContent>

          <TabsContent value="employees" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Employees</h2>
              <Button
                onClick={() => {
                  setShowEmployeeForm(!showEmployeeForm)
                  setEditingEmployee(null)
                }}
                className="bg-white text-black hover:bg-gray-200"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Employee
              </Button>
            </div>

            {showEmployeeForm && (
              <EmployeeForm
                onSubmit={handleEmployeeSubmit}
                initialData={editingEmployee}
                onCancel={() => {
                  setShowEmployeeForm(false)
                  setEditingEmployee(null)
                }}
                type="employee"
              />
            )}

            <DataTable
              data={employees}
              columns={employeeColumns}
              onEdit={(employee) => {
                setEditingEmployee(employee)
                setShowEmployeeForm(true)
              }}
              onDelete={handleDeleteEmployee}
            />
          </TabsContent>

          <TabsContent value="managers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Managers</h2>
              <Button
                onClick={() => {
                  setShowManagerForm(!showManagerForm)
                  setEditingManager(null)
                }}
                className="bg-white text-black hover:bg-gray-200"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Manager
              </Button>
            </div>

            {showManagerForm && (
              <EmployeeForm
                onSubmit={handleManagerSubmit}
                initialData={editingManager}
                onCancel={() => {
                  setShowManagerForm(false)
                  setEditingManager(null)
                }}
                type="manager"
              />
            )}

            <DataTable
              data={managers}
              columns={employeeColumns}
              onEdit={(manager) => {
                setEditingManager(manager)
                setShowManagerForm(true)
              }}
              onDelete={handleDeleteManager}
            />
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Contact Messages</h2>
            </div>

            <DataTable data={messages} columns={messageColumns} onDelete={handleDeleteMessage} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
