window.addEventListener(
  'load',
  () => {
    let issue_links = document.querySelectorAll('a[id^="issue_"][id$="_link"]')
    issue_links.forEach((issue_link) => {
      const button = document.createElement("button")
      button.innerHTML = "Copy"
      button.onclick = () => {
        navigator.clipboard.writeText(issue_link.text)
      }

      issue_link.parentElement
      .parentElement
      .append(button)
    })
  }
)