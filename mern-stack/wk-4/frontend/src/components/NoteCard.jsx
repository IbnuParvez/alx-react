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
        <button className="bg-red-600 text-white hover:bg-red-700" onClick={() => onDelete(note._id)}>Delete</button>
      </div>
      </>
      ):(
        <h3 className="text-lg font-semibold">Edit Note!</h3>
      )}
      </CardHeader>
      <CardContent className="space-y-3">
      {!editing ?(
      <p className="text-slate-700 whitespace-pre-wrap">{ note.content || <em>No Content yet!!!</em>}</p>
      ):(
      <form onSubmit={(e)=>{e.preventDefault(); onSave(note._id, draft); setEditing(false);}} className="space-y02">

      <input value={draft.title} onChange={(e)=>setDraft({...draft, title:e.target.value})} />

      <TextArea rows={5} value={draft.content} onChange={(e)=>setDraft({...draft, content:e.target.value})} />

      <div className="flex gap-2">
      <button className="bg-green-600 hover:bg-green-700">Save</button>
      <button className="bg-slate-600 hover:bg-slate-700" onClick={()=>setEditing(false)}>Cancel boss!!!</button>
      </div>
      </form>
      )}
      <p className="text-xs text-slate-500">Updated {new Date(note.updatedAt).toLocaleString()}</p>
      </CardContent>
    </Card>
  );
}