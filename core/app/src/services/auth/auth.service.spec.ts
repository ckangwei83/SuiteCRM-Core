import {TestBed} from '@angular/core/testing';
import {AuthService} from '@services/auth/auth.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {of} from 'rxjs';

describe('Auth Service', () => {
    let httpMock = null;
    let routerMock = null;
    let messageMock = null;
    let stateManagerMock = null;
    let languageMock = null;
    let service = null;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        httpMock = jasmine.createSpyObj('HttpClient', ['post']);
        httpMock.post.and.callFake(() => of([]));

        routerMock = jasmine.createSpyObj('Router', ['navigate']);
        routerMock.navigate.and.callFake(() => {
            return {
                finally: (): void => {
                }
            };
        });

        messageMock = jasmine.createSpyObj('MessageService', ['addSuccessMessage', 'log']);
        messageMock.addSuccessMessage.and.callFake(() => {
        });

        messageMock.log.and.callFake(() => {
        });


        stateManagerMock = jasmine.createSpyObj('StateManager', ['clear']);
        stateManagerMock.clear.and.callFake(() => {
        });

        languageMock = jasmine.createSpyObj('LanguageFacade', ['getAppString']);
        languageMock.getAppString.and.callFake((key: string) => key);

        service = new AuthService(httpMock, routerMock, messageMock, stateManagerMock, languageMock);

    });

    it('#logout', () => {
        service.logout();

        const body = new HttpParams();
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

        expect(httpMock.post).toHaveBeenCalledWith('logout', body.toString(), {headers, responseType: 'text'});

        expect(stateManagerMock.clear).toHaveBeenCalledWith();
        expect(languageMock.getAppString).toHaveBeenCalledWith('LBL_LOGOUT_SUCCESS');
        expect(messageMock.addSuccessMessage).toHaveBeenCalledWith('LBL_LOGOUT_SUCCESS');
        expect(messageMock.log).toHaveBeenCalledWith('Logout success');
        expect(routerMock.navigate).toHaveBeenCalledWith(['/Login']);
    });
});

