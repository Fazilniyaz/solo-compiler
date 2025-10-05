"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil, Trash2 } from "lucide-react"

interface DataTableProps {
  data: any[]
  columns: { key: string; label: string }[]
  onEdit: (item: any) => void
  onDelete: (id: string) => void
}

export function DataTable({ data, columns, onEdit, onDelete }: DataTableProps) {
  if (data.length === 0) {
    return (
      <Card className="bg-card border-border">
        <CardContent className="p-8 text-center text-muted-foreground">No data available</CardContent>
      </Card>
    )
  }

  return (
    <div className="overflow-x-auto">
      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} className="text-left p-4 font-semibold text-sm">
                    {column.label}
                  </th>
                ))}
                <th className="text-right p-4 font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id || index} className="border-b border-border last:border-0 hover:bg-muted/50">
                  {columns.map((column) => (
                    <td key={column.key} className="p-4 text-sm">
                      {column.key === "from" || column.key === "to"
                        ? item[column.key]
                          ? new Date(item[column.key]).toLocaleDateString()
                          : "N/A"
                        : item[column.key] || "N/A"}
                    </td>
                  ))}
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline" onClick={() => onEdit(item)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-destructive hover:text-destructive bg-transparent"
                        onClick={() => onDelete(item._id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
