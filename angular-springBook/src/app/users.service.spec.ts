import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { Users } from './users';


describe('UsersService', () => {
  let service: UsersService,
    httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all users with firstName', () => {
    const firstName = 'Jon';
    const dummyUsers: Users[] = [
      { userId: 1, firstName: 'Jon', lastName: 'Smith', email: 'j@mail.com', passWord: 'pass', proImage: 'img.com'},
      { userId: 2, firstName: 'Jon', lastName: 'Smith1', email: 'j1@mail.com', passWord: 'pass1', proImage: 'img1.com'},
      { userId: 3, firstName: 'Jon', lastName: 'Smith2', email: 'j2@mail.com', passWord: 'pass2', proImage: 'img2.com'},
    ];

    service.getUsersByFirstName(firstName).subscribe(users => {
      expect(users.length).toBe(3);
      expect(users).toEqual(dummyUsers);
    })

    const request = httpMock.expectOne(`${service.baseUrl}/${firstName}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyUsers);
  });
});
