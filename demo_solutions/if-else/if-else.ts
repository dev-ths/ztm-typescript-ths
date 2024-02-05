import { assert } from "console";

  const hasTheSkills = true;
  const day = "wednesday";
  const hoursWorked = 9;
  const totalOvertime = 0.5;
  const holidaySeason = false;

const approveOvertimeWork = ():boolean => {
  if (!hasTheSkills) {
    return false
  }

  if (!isValidOvertimeHours(hoursWorked)) {
    return false
  }

  if (!isBusyDay()) {
    return false
  }
  return true
}

const isValidOvertimeHours = (hoursWorked:number):boolean => {
  if (hoursWorked >= 8) {
    return true
  } else {
    return false
  }
}

const isBusyDay = ():boolean => {
  if (day.toLowerCase() === "tuesday" || holidaySeason) {
    return true
  } else {
    return false
  }
}

assert(approveOvertimeWork(),"uh oh")