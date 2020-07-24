/**
 * Find max amount of meetings when given an array of meeting lengths
 * Optimal time must be found, try for full 8 hour days
 * @param {Array} nums 
 * @return {Array<Array<number>>}  
 */
function findMaxMeetingsPerDay(nums) {
  const sortedMeetings = nums.sort((a,b) => b - a);
  const scheduledMeetings = [];
  let timeLeftinDay = 8;
  let index = 0;
  let day = 0;
  while (sortedMeetings.length > 0) {
    if (sortedMeetings[index] <= timeLeftinDay) {
      if (!scheduledMeetings[day]) {
        scheduledMeetings[day] = [];
      }
      timeLeftinDay -= sortedMeetings[index]; 
      scheduledMeetings[day].push(sortedMeetings[index]); 
      sortedMeetings.splice(index, 1);
    } else {
      index++;
    }

    if (!timeLeftinDay || index === sortedMeetings.length) {
      day++;
      timeLeftinDay = 8;
      index = 0;
    }
  }

  // TODO: return scheduled meetings sorted with full 8 hour days first 
  return scheduledMeetings;
}

exports.findMaxMeetingsPerDay = findMaxMeetingsPerDay;