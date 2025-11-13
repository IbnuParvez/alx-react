import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useState } from "react";
import { Input } from "./ui/input";
import { TextArea } from "./ui/textarea";

export default function NoteCard({ note, onSave, onDelete}){
  const [editing, setEditing] = useState(false);
  const [draft, setDrafting] = useState({ title: note.title, content: note.content});

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex items-center justify-between">
      {!editing ?(
      <>
      <h3 className="text-lg font-semibold">{note.title}</h3>
      <div className="flex gap-2">
        <button className="bg-slate-600 hover:bg-slate-700" onClick={() => setEditing(true)}>Edit</button>
        <button className="bg-red-600 text-white hover:bg-red-700" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
      </>
      ):(
        <h3 className="text-lg font-semibold">Edit Note!</h3>
      )}
      </CardHeader>
      <CardContent>


      </CardContent>
    </Card>
  )
}