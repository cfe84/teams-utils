const getMeetingFromJoinWebUrl = (joinWebUrl) => {
  const encodedUrl = encodeURIComponent(`JoinWebUrl eq '${joinWebUrl}'`)
  const graphApiUrl = `https://graph.microsoft.com/v1.0/me/onlineMeetings?$filter=${encodedUrl}`
  return graphApiUrl
}


export {
  getMeetingFromJoinWebUrl
}
