function humanReadable (seconds) {
    if(!seconds)return "00:00:00"

    
    const hrs = Math.floor(`${seconds / 3600}`)

    const minDotIndex = `${seconds / 3600}`.search(/[.]/)


    let mins = Math.floor(`${`${seconds / 3600}`.slice(minDotIndex) * 60}`)

    if(minDotIndex === -1){
        mins = 0
    }
    let dotIndex = `${`${seconds / 3600}`.slice(minDotIndex) * 60}`.search(/[.]/)


    const sec = Math.ceil(`${`${seconds / 3600}`.slice(minDotIndex) * 60}`.slice(dotIndex, 8) * 60)

    if(sec === 60){
        return  `${hrs < 10 ? '0' + hrs : hrs}:01:00`
    }

    return `${hrs < 10 ? '0' + hrs : hrs}:${mins < 10 ? '0' + mins : mins }:${sec < 10 ? '0' + sec : sec}`
  }