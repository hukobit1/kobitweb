import { v4 as uuidv4 } from 'uuid'

import Baran from '../../Assets/Images/MemberPictures/Baran.jpg'
import Sude from '../../Assets/Images/MemberPictures/Sudis.jpg'
import Ataberk from '../../Assets/Images/MemberPictures/Ataberk.jpg'
import Hasanberk from '../../Assets/Images/MemberPictures/Hasan.jpg'
import Şeyma from '../../Assets/Images/MemberPictures/Şeyma.jpg'
import BerkHoca from '../../Assets/Images/MemberPictures/BerkHoca.jpg'
import Hatice from '../../Assets/Images/MemberPictures/Hatice.jpg'
import Haluk from '../../Assets/Images/MemberPictures/Haluk.jpg'
import Egemen from '../../Assets/Images/MemberPictures/Egemen.jpg'
import Batuhan from '../../Assets/Images/MemberPictures/Batuhan.jpg'
import İrem from '../../Assets/Images/MemberPictures/İrem.jpg'
import Çağrıhan from '../../Assets/Images/MemberPictures/Çağrıhan.jpg'

/**
 * users = {
 *   yonetim kurulu : []
 *   denetleme kurulu : []
 *   topluluk baskani : []
 * }
 */

/**
 * bolumAdi: {
    id: string;
    name: string;
    photo: string;
    linkedin: string;
}[]
 */

const users = {
  yonetimKurulu: [
    {
      id: uuidv4(),
      name: 'John Doe',
      photo: Sude,
      linkedin: 'https://www.linkedin.com/in/johndoe/'
    },
    {
      id: uuidv4(),
      name: 'Jane Smith',
      photo: Hatice,
      linkedin: 'https://www.linkedin.com/in/janesmith/'
    },
    {
      id: uuidv4(),
      name: 'Bob Johnson',
      photo: Baran,
      linkedin: 'https://www.linkedin.com/in/bobjohnson/'
    },
    {
      id: uuidv4(),
      name: 'John Doe',
      photo: Ataberk,
      linkedin: 'https://www.linkedin.com/in/johndoe/'
    },
    {
      id: uuidv4(),
      name: 'Jane Smith',
      photo: Çağrıhan,
      linkedin: 'https://www.linkedin.com/in/janesmith/'
    },
    {
      id: uuidv4(),
      name: 'Bob Johnson',
      photo: İrem,
      linkedin: 'https://www.linkedin.com/in/bobjohnson/'
    },
    {
      id: uuidv4(),
      name: 'Bob Johnson',
      photo: Batuhan,
      linkedin: 'https://www.linkedin.com/in/bobjohnson/'
    },
    {
      id: uuidv4(),
      name: 'Bob Johnson',
      photo: Hasanberk,
      linkedin: 'https://www.linkedin.com/in/bobjohnson/'
    }
    // ... more members on list
  ],
  denetlemeKurulu: [
    {
      id: uuidv4(),
      name: 'Bob Johnson',
      photo: Şeyma,
      linkedin: 'https://www.linkedin.com/in/bobjohnson/'
    },
    {
      id: uuidv4(),
      name: 'Bob Johnson',
      photo: Haluk,
      linkedin: 'https://www.linkedin.com/in/bobjohnson/'
    },
    {
      id: uuidv4(),
      name: 'Bob Johnson',
      photo: Egemen,
      linkedin: 'https://www.linkedin.com/in/bobjohnson/'
    }
    // ... more members on list
  ],
  toplulukBaskani: [
    {
      id: uuidv4(),
      name: 'Jane Smith',
      photo: BerkHoca,
      linkedin: 'https://www.linkedin.com/in/janesmith/'
    }
    // ... more members on list
  ]
}

export default users
