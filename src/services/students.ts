import { Student } from "../models/student"
import Axios from 'axios'

const BASE_API_URL = 'https://randomuser.me/api/'
const apiOptions = {
  seed: 'showtell',
  results: 10,
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

export function getStudents(): Promise<Student[]> {
  return Axios.get<{info: any, results: StudentAPIResponse[]}>(BASE_API_URL, {params: apiOptions})
              .then(response => response.data.results)
              .then(parseStudentResponse)
}
