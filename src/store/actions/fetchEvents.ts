import { Dispatch } from 'react';
import { EventActions, EventActionsType, IEvent } from '../../types/event';

export const fetchEvents = () => (dispatch: Dispatch<EventActionsType>) => {
  const { gapi } = window;

  const getEvents = () => {
    const timeMin = new Date().toISOString();
    const timeMax = new Date();
    timeMax.setHours(23, 59, 59, 999);
    gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin,
      timeMax: timeMax.toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 5,
      orderBy: 'startTime',
    }).then((response) => {
      const body = response.result.items;
      const temp = body?.map(({
        id, start, end, summary,
      }): IEvent => ({
        id: id || '',
        start: start?.dateTime ?? '',
        end: end?.dateTime ?? '',
        summary: summary || '',
      })) || null;
      dispatch({ type: EventActions.SUCCESS_FETCH_ACTION_TYPE, payload: temp });
    });
  };

  const gapiStart = () => {
    dispatch({ type: EventActions.START_FETCH_ACTION_TYPE });
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: 'AIzaSyDzrbQfZJTQDI-EZWjaE0jDqseTkKwao-8',
        clientId: '510205325519-s2p1co3467qcebpp0r8o19crjqd18c0a.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.events',
      });

      gapi.client.load('calendar', 'v3');

      const authInstance = gapi.auth2.getAuthInstance();
      if (!authInstance.isSignedIn) {
        authInstance.signIn()
          .then(getEvents).catch((err) => {
            if (err instanceof Error) {
              dispatch({ type: EventActions.ERROR_FETCH_ACTION_TYPE, payload: err.message });
            }
          });
      } else {
        authInstance.then(getEvents).catch((err: { message: string; }) => {
          dispatch({ type: EventActions.ERROR_FETCH_ACTION_TYPE, payload: err.message });
        });
      }
    });
  };

  gapiStart();
};
