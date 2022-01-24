import { loadGapiInsideDOM } from 'gapi-script';
import { Dispatch } from 'react';
import { EventActions, EventActionsType, IEvent } from '../../types/event';

export const fetchEvents = () => async (dispatch: Dispatch<EventActionsType>) => {
  const gapi = await loadGapiInsideDOM();

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
        apiKey: 'AIzaSyAslfw_FZwOYeo3lRMFPQQS31bjXavCAtw',
        clientId: '1004557556199-48gjatbrmsirvt3pvehm62m97v1cgp2u.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.events',
      });

      gapi.client.load('calendar', 'v3', () => {
        const authInstance = gapi.auth2.getAuthInstance();

        if (!authInstance.isSignedIn.get()) {
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
    });
  };

  gapiStart();
};
