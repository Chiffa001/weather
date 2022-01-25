/* global PositionCallback PositionErrorCallback */

export const getPosition = () => new Promise(
  (resolve: PositionCallback, reject: PositionErrorCallback) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  },
);
