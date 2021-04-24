class Alarm {
    constructor(alarmAudio) {
        this.alarmAudio = alarmAudio
    }

    stopAlarm() {
        this.alarmAudio.pause()
    }
    
    playAlarm(time) {
        this.alarmAudio.currentTime = 0
        this.alarmAudio.play()
        setTimeout(this.stopAlarm.bind(this), time) // 16000 is about one cycle.
    }
}

const flightAlarm = new Audio('https://upload.wikimedia.org/wikipedia/commons/f/f9/Motorsirene_-_Feuerwehralarm.ogg')
const alarm = new Alarm(flightAlarm)
const serviceStatusText = document.querySelector(".ServiceStatusText")

const e = document.querySelector(".TodoNotification")
const observer = new MutationObserver(function (event) {
    if (e.classList.contains("TodoNotification-TicketToDo")) {
        alarm.playAlarm(16000)
    }
})

observer.observe(e, {
  attributes: true, 
  attributeFilter: ['class'],
  childList: false, 
  characterData: false
})
