export default class DayOfWeek {
    constructor(date){
        this.date = new Date(date)
        console.log(typeof this.date)
    }

    getWeekday(){
        let dayOfWeek = this.date.getDay();
        let dayString = ''
        switch(dayOfWeek){
            case 0:
                dayString = "Sunday";
                break;
            case 1: 
                dayString = "Monday";
                break;
            case 2:
                dayString = "Tuesday";
                break;
            case 3:
                dayString = "Wednesday";
                break;
            case 4:
                dayString = "Thursday";
                break;
            case 5:
                dayString = "Friday";
                break;
            case 6:
                dayString = "Saturday";
        } return dayString
    }
}
