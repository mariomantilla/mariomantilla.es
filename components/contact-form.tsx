"use client"

import { Send } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react";
import { toast } from "./ui/use-toast";

export const ContactForm = () => {

    function sendEmail() {
        fetch('/api/send-email', {
            method: 'POST',
            body: JSON.stringify({
                name, email, message
            }),
        }).then((res) => res.json().then((response) => {
            toast({
                variant: res.status !== 200 ? 'destructive' : 'default',
                description: response.message,
            })
            if (res.status === 200) {
                setName('')
                setEmail('')
                setMessage('')
            }
        }))
        .catch((err) => {
            toast({
                variant: "destructive",
                description: err,
            })
        });
    }


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const inputClassName = "w-full p-3 bg-white/5 border border-white/20 rounded-md placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-900"

    return (
        <form className="space-y-6 items-center" action={sendEmail}>
            <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className={inputClassName} value={name} onChange={
                    (e) => setName(e.target.value)
                } />
            </div>
            <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input type="email" name="email" id="email" className={inputClassName} value={email} onChange={
                    (e) => setEmail(e.target.value)
                } />
            </div>
            <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea name="message" id="message" rows={4} className={inputClassName} onChange={
                    (e) => setMessage(e.target.value)
                } value={message} />
            </div>
            <div className="flex items-center justify-center">
                <Button variant="outline" type="submit">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                </Button>
            </div>
        </form>
    )
}