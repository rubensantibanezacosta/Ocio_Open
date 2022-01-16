import { Asisstant } from 'src/app/models/assistant';
import { VariablesService } from './../../config/config';
import { HttpErrorResponse } from '@angular/common/http';


import { AssistantsService } from './assistants.service';
import { of, throwError } from 'rxjs';
import { User } from '../models/user';


describe('Assistants Service', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let assistantsService: AssistantsService;
  let variablesService: VariablesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ['get']);
    variablesService = new VariablesService();
    assistantsService = new AssistantsService(httpClientSpy as any, variablesService);

  });

  fit('should return an assistant', () => {
    const expectedAssistant: Asisstant = {
      event_id: 2,
      assistant: "email@email.com",
      attendance: true,
      excuse: "",
      user: new User()
    }

    httpClientSpy.get.and.returnValue(of(expectedAssistant));
    let returnedAssistant: Asisstant;
    assistantsService.getAssistantByPk(2, "email.com").subscribe((asisstant) => {
      returnedAssistant = asisstant;
      expect(returnedAssistant).toEqual(expectedAssistant);
      expect(returnedAssistant.attendance).toBe(true);
    });
  });

  fit('should return error', () => {
    let errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not found'
    });


    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    let response;
    assistantsService.getAssistantByPk(2, "email@email.com").subscribe((asisstant) => {
      response = asisstant;
      console.log(response)
      expect(response).toBe(errorResponse);

    });
  });


});


/*   it('should be created', () => {
  expect(service).toBeTruthy();
}); */