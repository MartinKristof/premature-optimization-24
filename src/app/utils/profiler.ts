export const callback = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
) => {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual duration: ${actualDuration}`);
  console.log(`Base duration: ${baseDuration}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
};
