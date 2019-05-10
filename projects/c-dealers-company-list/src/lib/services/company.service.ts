import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from '../models/company'

const mockdata=[
  {
    "id": 1,
    "name": "TokTok",
    "address": "adres1",
    "users": [
      {
        "id": "1",
        "name": "Can Group",
        "surname": "adres adres adres",
        "phonenumber": "567 234 65 90",
        "mail": "asda@gmail.com"
      },
      {
        "id": "2",
        "name": "Bay Teknik",
        "surname": "adres adres",
        "phonenumber": "0908 234 61 73",
        "mail": "asda@gmail.com"
      },
      {
        "id": "3",
        "name": "Ice World",
        "surname": "adres adres",
        "phonenumber": "567 153 73 90",
        "mail": "asda@gmail.com"
      },
      {
        "id": "4",
        "name": "Senem Group",
        "surname": "adres adres adres",
        "phonenumber": "0908 904 76 32",
        "mail": "asda@gmail.com"
      }
    ]
  },
  {
    "id": 2,
    "name": "TikTok",
    "address": "adres2",
    "users": [
      {
        "id": "1",
        "name": "Ali Teknik",
        "surname": "adres",
        "phonenumber": "0333 664 32 96",
        "mail": "a@gmail.com"
      },
      {
        "id": "2",
        "name": "Hacı Group",
        "surname": "adres adres",
        "phonenumber": "0444 842 53 75",
        "mail": "h@gmail.com"
      }
    ]
  },
   {
    "id": 3,
    "name": "Alanya Cantek",
    "address": "adres3",
    "users": [
      {
        "id": "1",
        "name": "Melike Teknik",
        "surname": "adres ",
        "phonenumber": "0567 632 97 08",
        "mail": "asda@gmail.com"
      },
      {
        "id": "2",
        "name": "Canberk Group",
        "surname": "adres ",
        "phonenumber": "0908 312 87 56",
        "mail": "asda@gmail.com"
      }
    ]
  },
  {
    "id": 4,
    "name": "Gürcistan",
    "address": "adres4",
    "users": [
      {
        "id": "1",
        "name": "Cem Group",
        "surname": "adres adres",
        "phonenumber": "0333 242 97 32",
        "mail": "a@gmail.com"
      },
      {
        "id": "2",
        "name": "Leyla Teknik",
        "surname": "adres adres",
        "phonenumber": "0444 242 75 97",
        "mail": "h@gmail.com"
      }
    ]
  }
]
@Injectable()

export class CompanyService {

  constructor(private http: HttpClient) { }


  getCompany(id: number): Observable<Company[]> {
    console.log("gelen id:", id)
    return this.temp_getCompany(id);
  }


  temp_getCompany(id: number): Observable<any>{
    return of(mockdata);
  }

  getCompanies(): Observable<any> {
     return of(mockdata);
  }

}

