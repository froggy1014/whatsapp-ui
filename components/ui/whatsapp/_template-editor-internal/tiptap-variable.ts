import { mergeAttributes, Node } from "@tiptap/core";
import type { NodeViewRendererProps } from "@tiptap/react";
import { ReactNodeViewRenderer, NodeViewWrapper } from "@tiptap/react";
import { createElement } from "react";

function VariableChipView(props: NodeViewRendererProps) {
  const { index, name } = props.node.attrs;
  const label = name ? `{{${name}}}` : `{{${index}}}`;
  return createElement(
    NodeViewWrapper,
    { as: "span", className: "tiptap-variable-chip" },
    label,
  );
}

export const VariableNode = Node.create({
  name: "variable",
  group: "inline",
  inline: true,
  atom: true,

  addAttributes() {
    return {
      index: { default: null },
      name: { default: null },
    };
  },

  parseHTML() {
    return [{ tag: "span[data-variable]" }];
  },

  renderHTML({ HTMLAttributes }) {
    const label = HTMLAttributes.name
      ? `{{${HTMLAttributes.name}}}`
      : `{{${HTMLAttributes.index}}}`;
    return [
      "span",
      mergeAttributes(HTMLAttributes, { "data-variable": "" }),
      label,
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(VariableChipView);
  },
});

export function getPlainTextWithVariables(doc: Record<string, unknown>): string {
  let text = "";
  const content = doc.content as Array<Record<string, unknown>> | undefined;
  content?.forEach((node) => {
    if (node.type === "paragraph") {
      if (text.length > 0) text += "\n";
      const children = node.content as Array<Record<string, unknown>> | undefined;
      children?.forEach((child) => {
        if (child.type === "text") {
          text += child.text;
        } else if (child.type === "variable") {
          const attrs = child.attrs as { index: number | null; name: string | null };
          text += attrs.name ? `{{${attrs.name}}}` : `{{${attrs.index}}}`;
        }
      });
    }
  });
  return text;
}
