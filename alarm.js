class Alarm {
    constructor(alarmAudio) {
        this.alarmAudio = alarmAudio
    }

    stopAlarm = () => {
        this.alarmAudio.pause()
        this.alarmAudio.currentTime = 0
    }
    
    playAlarm = time => {
        this.alarmAudio.play()
        setTimeout(this.stopAlarm, time)
    }
}

const flightAlarm = new Audio('https://upload.wikimedia.org/wikipedia/commons/f/f9/Motorsirene_-_Feuerwehralarm.ogg')
const alarm = new Alarm(flightAlarm)

const stopAlarmButton = document.createElement("button")
stopAlarmButton.id = "stop-alarm-button"
stopAlarmButton.innerText = "Stop alarm"
stopAlarmButton.style.margin = "1rem"
stopAlarmButton.style.marginLeft = "-5.6rem"
stopAlarmButton.style.padding = "0.2rem"
stopAlarmButton.style.position = "absolute"

document.querySelector(".ComposeMainPanel").insertAdjacentElement("beforebegin", stopAlarmButton)

stopAlarmButton.addEventListener("click", e => {
    e.preventDefault()
    alarm.stopAlarm()
})

const e = document.querySelector(".TodoNotification")
const observer = new MutationObserver(function (event) {
    if (e.classList.contains("TodoNotification-TicketToDo")) {
        alarm.playAlarm(16000) // 16000 is about one cycle.
    }
})

observer.observe(e, {
  attributes: true, 
  attributeFilter: ['class'],
  childList: false, 
  characterData: false
})
