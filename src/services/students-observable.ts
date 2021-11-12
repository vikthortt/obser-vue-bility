import Axios from  'axios-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Student } from '../models/student';

const BASE_API_URL = 'https://randomuser.me/api/'
const apiOptions = {
  seed: 'showtell',
  results: 10,
  page: 5,
  inc: 'login,name,dob,email,picture,nat'
}

type StudentAPIResponse = {
  login: {
    uuid: string
  }
  name: {
    first: string
    last: string
  }
  dob: {
    date: string
    age: number
  }
  email: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}

function parseStudentResponse(studentsResponse: StudentAPIResponse[]): Student[] {
  return studentsResponse.map(student => ({
    id: student.login.uuid,
    name: `${student.name.first} ${student.name.last}`,
    dob: new Date(student.dob.date),
    email: student.email,
    nationality: student.nat,
    picture: student.picture.large,
    thumbnail: student.picture.thumbnail
  }))
}

export function getStudentsObs(): Observable<Student[]> {
  return Axios.get<{info: any, results: StudentAPIResponse[]}>(BASE_API_URL, { params: apiOptions }).pipe(
    map(response => response.data.results),
    map(parseStudentResponse)
  )
}