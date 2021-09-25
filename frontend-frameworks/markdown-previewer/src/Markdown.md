# Markdown Previewer built using ReactJS!
## Let's preview some markdown...

### We will start with headers
The first two lines are prefixed with `#` and `##` respectively. The `'#'`  character is used to signify to a heading. There are 6 different levels of headings available for you to use. 

```# This is an h1``` 
will render *This is an h1* as a level 1 heading

```###### This is an h6```
will render *This is an h6* as a level 6 heading

### Now let's look at some options for formatting text...
To display text in *italics*, we will use the `*` or `_` characters

```*I will be italicized*```

```_and so will I_```
will render as:
*I will be italicized* 
_and so will I_

Displaying text in bold will also use the `*` and `_` characters, but use two of them at the beginning and end of the styled text.

```**This is bold**```

```__And so is this__``` 
will render as:
**This is bold**
__and so is this__

Furthermore, bold and italicized text can be done several different ways. For example we can combine underscores and asterisks, `_**` or `**_`, or we can use all underscores `___` or all asterisks `***`

```
__*Bold and italicized*__
```

will render: _**Bold and italicized**_,
and 

```
***Overly emphasized***
```
 as 

***Overly emphasized***

### Okay, let's have some more fun with quotes!

If you'd like to quote someone, use the > character before the line: 

```markdown
> "I'm a clever quote"
*Mr. Cleverness*
```
renders as

> "I'm a clever quote"
*Mr. Cleverness*

Also, block quotes can be generated using the `>` character before each line:
```markdown
> "I'm a really long quote
> from a presidential speech.
> People hear my words all
> over the world,
> from the televisions
> in their living rooms
> or at their local watering hole"
*Mr. President*
```
will render as:

> "I'm a really long quote
> from a presidential speech.
> People here my words all
> over the world,
> from the televisions
> in their living rooms
> or at their local watering hole"
*Mr. President*

### Now that we know how to render quotes, let's move on to links!

links can be generated automatically by using the full url, for example:
http://github.com - links automatically.

But, if I want to text to render such as 'GitHub' but also be a clickable link, I can put the text I want displayed in square brackets `[GitHub]` followed by the url in parenthesis `(https://github.com)`
```
[GitHub](http://github.com)
```
renders: [GitHub](http://github.com)


### We can also include snippets of code in our markdown.

Using backticks (`) we can insert code into our markdown.

For an inline code snippet, we just enclose the code in single backticks:
``` `<a>` ```
renders as `<a>`

For multiline code blocks we enclose our code in triple backticks (```):
\`\`\`
const myFunc = () => {
  return ...args > 1 ? 'one args' : 'two or more args'
}
\`\`\`

will render as:
```
const myFunc = () => {
  return ...args > 1 ? 'one args' : 'two or more args'
}
```

Another way we can incorporate code blocks that can use syntax highlighting is by including the name of the language we are writing after the first set of backticks for example: 

\`\`\`javascript

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

```python
def foo():
  if not bar: 
    return True
```
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
Format: ![Alt Text](/src/GitHub-Mark-64px.png)


- [x] This is a complete item
- [ ] This is an incomplete item

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b