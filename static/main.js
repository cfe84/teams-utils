import * as graph from "./graph.js"

const id = (i) => document.getElementById(i)

const components = {
  meetingFromUrl: {
    url: id("meetingFromUrl-url"),
    query: id("meetingFromUrl-query")
  }
}

components.meetingFromUrl.url.onkeyup = () => {
  const url = components.meetingFromUrl.url.value
  const query = graph.getMeetingFromJoinWebUrl(url)
  components.meetingFromUrl.query.innerHTML = query
}