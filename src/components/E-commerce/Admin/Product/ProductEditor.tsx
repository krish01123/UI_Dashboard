"use client";

import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
  Redo,
  UnderlineIcon,
  Undo,
} from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),

      Underline,

      Link.configure({
        openOnClick: false,
      }),

      Placeholder.configure({
        placeholder: "Start typing...",
      }),
    ],

    content: value,

    editorProps: {
      attributes: {
        class:
          "ProseMirror min-h-[250px] p-4 outline-none text-sm text-gray-700",
      },
    },

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const setLink = () => {
    if (!editor) return;

    const previousUrl = editor.getAttributes("link").href;

    const url = window.prompt("Enter URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({
        href: url,
      })
      .run();
  };

  const buttons = [
    {
      icon: <Bold size={17} />,
      action: () => editor.chain().focus().toggleBold().run(),
      active: editor.isActive("bold"),
    },

    {
      icon: <Italic size={17} />,
      action: () => editor.chain().focus().toggleItalic().run(),
      active: editor.isActive("italic"),
    },

    {
      icon: <UnderlineIcon size={17} />,
      action: () => editor.chain().focus().toggleUnderline().run(),
      active: editor.isActive("underline"),
    },

    {
      icon: <Heading1 size={17} />,
      action: () =>
        editor
          .chain()
          .focus()
          .toggleHeading({
            level: 1,
          })
          .run(),
      active: editor.isActive("heading", { level: 1 }),
    },

    {
      icon: <Heading2 size={17} />,
      action: () =>
        editor
          .chain()
          .focus()
          .toggleHeading({
            level: 2,
          })
          .run(),
      active: editor.isActive("heading", { level: 2 }),
    },

    {
      icon: <Heading3 size={17} />,
      action: () =>
        editor
          .chain()
          .focus()
          .toggleHeading({
            level: 3,
          })
          .run(),
      active: editor.isActive("heading", { level: 3 }),
    },

    {
      icon: <List size={17} />,
      action: () => editor.chain().focus().toggleBulletList().run(),
      active: editor.isActive("bulletList"),
    },

    {
      icon: <ListOrdered size={17} />,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      active: editor.isActive("orderedList"),
    },

    {
      icon: <Code size={17} />,
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      active: editor.isActive("codeBlock"),
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-gray-300">
      <div className="flex flex-wrap items-center gap-1 border-b bg-gray-50 p-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            type="button"
            onClick={button.action}
            className={`flex h-8 w-8 items-center justify-center rounded transition ${
              button.active
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {button.icon}
          </button>
        ))}

        <button
          type="button"
          onClick={setLink}
          className={`flex h-8 w-8 items-center justify-center rounded text-gray-600 hover:bg-gray-200 ${
            editor.isActive("link")
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          <LinkIcon size={17} />
        </button>

        <div className="ml-auto flex gap-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-200"
          >
            <Undo size={17} />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            className="flex h-8 w-8 items-center rounded hover:bg-gray-200"
          >
            <Redo size={17} />
          </button>
        </div>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
