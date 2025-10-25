import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function ContactForm() {
  const [botField, setBotField] = useState('');

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      class="flex flex-col gap-2 max-w-md mx-auto p-4"
      onSubmit={(e) => {
        if (botField) {
          e.preventDefault();
          return;
        }
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="bot-field" value={botField} onChange={e => setBotField(e.currentTarget.value)} class="hidden" />

      <label>
        Name:
        <input type="text" name="name" required class="border rounded p-1 w-full dark:text-zinc-900"/>
      </label>

      <label>
        Email:
        <input type="email" name="email" required class="border rounded p-1 w-full dark:text-zinc-900"/>
      </label>

      <label>
        Message:
        <textarea name="message" required class="border rounded p-1 w-full dark:text-zinc-900"></textarea>
      </label>

      <button type="submit" class="bg-zinc-900 hover:bg-zinc-600 text-white rounded p-2 mt-2 hover:bg-blue-700">
        Send
      </button>
    </form>
  );
}
