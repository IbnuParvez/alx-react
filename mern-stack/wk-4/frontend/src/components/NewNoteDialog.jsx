import { Button } from "./ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Input } from "./ui/input";
import { TextArea }  from "./ui/textarea";

export default function NewNoteDialog({ onCreate}) {
const [open, setOpen] = useState(false);
const [form, setForm] = useState({title: "", content: ""});
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

async function submit(e){
  e.preventDefault();
  if(!form.title.trim()) {
    setError("Title is required");
    return;
  }
  setLoading(true);
  setError("");
  try {
    await onCreate(form);
    setForm({title:"", content:""});
    setOpen(false);
  } catch (err) {
    setError(err.message || "Failed to create note");
  } finally {
    setLoading(false);
  }
}

return(
   <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>New Note</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4 shadow-xl">
          <Dialog.Title className="text-lg font-semibold mb-2">Create Note</Dialog.Title>
          {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
          <form onSubmit={submit} className="space-y-3">
            <Input placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />
            <TextArea rows={6} placeholder="Content" value={form.content} onChange={e=>setForm({...form, content:e.target.value})}/>
            <div className="flex gap-2">
              <Button type="submit" disabled={loading}>{loading ? "Creating..." : "Create"}</Button>
              <Button type="button" className="bg-slate-600 hover:bg-slate-700" onClick={()=>setOpen(false)}>Cancel</Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}