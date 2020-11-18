export class User 
{
  private m_id:string;
  private m_username:string;
  private m_password:string;
  private m_adress:string;
  private m_bio:string;
  private m_birthday:string;
  private m_gender:string;
  private m_country:string;
  private m_phone:number;
  private m_fullName:string;

  constructor()
  {
      this.m_id=this.uniqueId();
      this.m_username='';
      this.m_password='';
  }

  public get id () { return this.m_id; }

  public get username() { return this.m_username; }
  public set username(username) {this.m_username = username;}
  
  public get password() { return this.m_password; }
  public set password(password) {this.m_password = password}
  
  public get adress() { return this.m_adress; }
  public set adress(adress) {this.m_adress = adress}
  
  public get bio() { return this.m_bio; }
  public set bio(bio) {this.m_bio = bio}

  public get birthday() { return this.m_birthday; }
  public set birthday(birthday) {this.m_birthday = birthday}

  public get gender() { return this.m_gender; }
  public set gender(gender) {this.m_gender = gender}

  public get country() { return this.m_country; }
  public set country(country) {this.m_country = country}

  public get phone() { return this.m_phone; }
  public set phone(phone) {this.m_phone = phone}

  public get fullName() { return this.m_fullName; }
  public set fullName(fullName) {this.m_fullName = fullName}


  uniqueId()
  {
      const l_MS: number = Date.now();
      const l_shake = Math.random();
      const l_unique: string = Math.pow(l_MS, l_shake).toString();

      return l_unique.replace('.', l_MS.toString());
  }
}
