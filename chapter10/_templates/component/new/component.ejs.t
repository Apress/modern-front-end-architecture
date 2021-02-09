---
to: src/<%= h.getTypePath(locals.type) %><%=name%>/<%=name%>.js
---
import React from 'react'

export default function <%= name %> () {
  return <h1>Hello from <%= name %></h1>;
}