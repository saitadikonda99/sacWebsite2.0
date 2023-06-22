import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './SvrRegister.css'; 
import NavBar from '../../../components/NavigationBar/NavBar'; 
import Footer from '../../../components/Footer/Footer';




const districtList = {
  AndhraPradesh: ["Srikakulam","Parvathipuram Manyam", "Vizianagaram", "Visakhapatnam", "Alluri Sitharama Raju", "Anakapalli", "Kakinada", "East Godavari", "Dr. B. R. Ambedkar Konaseema", "Eluru", "West Godavari", "NTR", "Krishna", "Palnadu", "Guntur", "Bapatla", "Prakasam", "Sri Potti Sriramulu Nellore", "Kurnool", "Nandyal", "Anantapuramu", "Sri Sathya Sai", "YSR", "Annamayya", "Tirupati", "Chittoor"],

  ArunachalPradesh: ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"],

  Assam: ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],
  Bihar: ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
  Chhattisgarh: ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir-Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Korea","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
  Goa: ["North Goa","South Goa"],
  Gujarat: ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"],
  Haryana: ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
  HimachalPradesh: ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
  JammuKashmir: ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kathua","Kishtwar","Kulgam","Kupwara","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
  Jharkhand: ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela Kharsawan","Simdega","West Singhbhum"],
  Karnataka: ["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Bijapur","Chamarajanagar","Chikballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"],
  Kerala: ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
  MadhyaPradesh: ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],
  Maharashtra: ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],
  Manipur: ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Senapati","Tamenglong","Thoubal","Ukhrul"],
  Meghalaya: ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"],
  Mizoram: ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],
  Nagaland: ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"],
  Odisha: ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundargarh"],
  Punjab: ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Muktsar","Nawanshahr","Pathankot","Patiala","Rupnagar","Sangrur","Tarn Taran"],
  Rajasthan: ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"],
  Sikkim: ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"],
  TamilNadu: ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"],
  Telangana: ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhupalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"],
  Tripura: ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],
  UttarPradesh: ["Agra","Aligarh","Ambedkar Nagar","Amethi","Amroha","Auraiya","Ayodhya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],
  Uttarakhand: ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"],
  WestBengal: ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"],
  AndamanAndNicobarIslands: ["Nicobar","North and Middle Andaman","South Andaman"],
  Chandigarh: ["Chandigarh"],
  DadraAndNagarHaveliAndDamanAndDiu: ["Dadra and Nagar Haveli","Daman","Diu"],
  Delhi: ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"],
  JammuAndKashmir: ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kathua","Kishtwar","Kulgam","Kupwara","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
  Ladakh: ["Kargil","Leh"],
  Lakshadweep: ["Lakshadweep"],
  Puducherry: ["Karaikal","Mahe","Puducherry","Yanam"]
};



const Register = () => {

  const defaultState = '';
  const defaultDistrict = '';
  const [selectedState, setSelectedState] = useState(defaultState);
  const [selectedDistrict, setSelectedDistrict] = useState(defaultDistrict);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict('');
    setInputs({ ...inputs, stateName: event.target.value });
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setInputs({ ...inputs, districtName: event.target.value });
  };

  const districtOptions = selectedState
    ? districtList[selectedState].map((district) => (
        <option key={district} value={district}>
          {district}
        </option>
      ))
    : null;


  const [inputs, setInputs] = useState({
    idno:"", 
    officialName:"", 
    gender:"", 
    branch:"",
    mobile_number:"", 
    parent_mobile:"",
    residency:"",
    stateName:"",
    districtName:"",
    interest:""
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const { idno, officialName, gender, branch, mobile_number, parent_mobile, residency, stateName, districtName, interest } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const onSubmitForm = async e => {
    //preventing the default values. 
    e.preventDefault(); 
    //validating the idno (idno should be a 10 digit value)
    if (idno.length !== 10) {
      alert("Please enter a valid ID Number");
      return;
    }

    if(mobile_number.length !== 10) {
      alert("Mobile number should be a 10 digit value"); 
      return; 
    }

    if(parent_mobile.length != 10) {
      alert ("Parent mobile number should be a 10 digit value"); 
      return; 
    }

    if (mobile_number === parent_mobile) {
      alert("Mobile Contact and Parent Mobile cannot be the same");
      return;
    }

    try {

      setIsSubmitting(true); 
      const body = { idno, officialName, gender, branch, mobile_number, parent_mobile, residency, stateName, districtName, interest };

      const response = await fetch(
        "/insert",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
      
      if (parseRes === "User already registered") {
        alert("User with the provided ID number is already registered");
      } else {
        setIsSubmitSuccess(true);
      }
    } 
    catch (error) {
      // console.error(error.message);
      console.log("this message is custom generated on console - ERROR");
      // alert("You are already registered to Social Internship at SAC");
      return; 
    } 

    finally {
      setTimeout(() => {
        setIsSubmitting(false); 
        alert("You are Successfully Registered to Social Internship");
      }, 1500);
    }
  }; 

  const submitButton = isSubmitting ? (
    <button disabled>
      <i className="fa fa-spinner fa-spin"></i> Data Processing...
    </button>
  ) : isSubmitSuccess ? (
    <button style={{ backgroundColor: "green" }}>Successfully submitted</button>
  ) : (
    <button>Submit</button>
  );



  return (
    <Fragment>
      <NavBar/>
      <div className="svrRegisterContainer">
      <div className="formHeading">
           <h1> Y22 Social Internship Registation  <br />Student Activity Center</h1>
           <hr />
           <p>Engineering Departments: 11th May - 21th May 2023 <br />MHS Departments: 25th May - 7th June 2023</p>
          </div>
        <form onSubmit={onSubmitForm}>
         <div className="formSection-one">
          <div className="idnoClass">
              <label htmlFor="idno">Register University ID Number <span>*</span></label> <br />
              <input required type="text" name="idno" placeholder="ID Number" value={idno} onChange={onChange} /> <br />
            </div>

            <div className="nameClass">
              <label htmlFor="officialName">Name as per University Records <span>*</span></label> <br />
              <input required type="text" name="officialName" placeholder="Official Name" value={officialName} onChange={onChange} /> <br />
            </div>
         </div>

         <div className="formSection-one">
            <div className="genderClass">
              <label htmlFor="gender">Gender<span>*</span></label> <br />
                  <select required name="gender" value={gender} onChange={onChange}>
                    <option value="">--Select--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="NOT">Prefer Not to Say</option>
                  </select> <br />
            </div>
            <div className="branchClass">
            <label htmlFor="branch">Department <span>*</span></label> <br />
              <select required name="branch" value={branch} onChange={onChange}>
                <option value="">--Select--</option>
                <option value="CSE">Computer Science and Engineering</option>
                <option value="CSIT">Computer Science and Information Technology</option>
                <option value="IOT">Internet of Things</option>
                <option value="AIDS">Artificial Intelligence and Data Science</option>
                <option value="ECE">Electronics and Computer Engineering</option>
                <option value="ECM">Electronics and Communication Engineering</option>
                <option value="EEE">Electrical and Electronics Engineering</option>
                <option value="Mech">Mechanical Engineering</option>
                <option value="Civil">Civil Engineering</option>
                <option value="BioTech">Bio Technology</option>
                <option value="BBA">Bachelors of Business Administration BBA</option>
                <option value="BA-LLB">Bachelors of Arts and Legislative Law</option>
                <option value="BCA">Bachelors of Computer Applications</option>
                <option value="B.Com">Bachelors of Commerce</option>
                <option value="Hotel Management">Hotel Management</option>
                <option value="BA-IAS">Bachelors of Arts with Integrated IAS (UPSC)</option>
                <option value="MBA">Masters of Business Administration</option>
                <option value="MCA">Masters of Computer Applications</option>
                <option value="Visual Communications">Visual Communications</option>
                <option value="BArch">Bachelors of Architecture</option>
              </select> <br />

          </div>
         </div>
         <div className="formSection-one">
          <div className="residencyClass">
                <label htmlFor="residency">Residing in University Hostel or Day Scholar? <span>*</span></label> <br />
                <select required name="residency" value={residency} onChange={onChange}>
                    <option value="">--Select--</option>
                    <option value="Hostel">Hostel</option>
                    <option value="DayScholar">Day Scholar</option>
                  </select> <br />
              </div>
              <div className="primaryMailClass">
                <label htmlFor="primaryMail">Primary Email ID <span>*</span></label> <br />
                <input required readOnly type="text" name="primaryMail" placeholder="primaryMail" value={idno+"@kluniversity.in"} onChange={onChange} /> <br />
              </div>
         </div>


          
          <div className="formSection-one">
            <div className="mobileClass">
                <label htmlFor="MobileNumber">Mobile Contact <span>*</span></label> <br />
                <input required type="text" name="mobile_number" placeholder="mobile_number" value={mobile_number} onChange={onChange} /> <br />
              </div>
              <div className="parentClass">
                <label htmlFor="parentMobile">Parent Mobile <span>*</span></label>
                <input required type="text" name="parent_mobile" placeholder="parent_mobile" value={parent_mobile} onChange={onChange} /> <br />
              </div>
          </div>

          <div className="formSection-one">
            <div className='StateClass'>
            <label htmlFor="state-select">Select your state<span>*</span> </label>
            <select id="state-select" name="stateName" value={stateName} onChange={handleStateChange} required>
              <option value="">--Select State--</option>
              {Object.keys(districtList).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>

              <div className='DistrictClass'>
                <label htmlFor="district-select">Select your district: <span>*</span> </label>
                <select id="district-select" name='districtName' value={districtName} onChange={handleDistrictChange} required>
                  <option value="">--Select District--</option>
                  {districtOptions}
                </select>
              </div>
            
          </div>
            

        
         

         <div className="formSection-one">
          <div className="InterestClass">
            <label htmlFor="Interest">Choose your domain of Interest <span>*</span> <Link to='/Home/SvrHome'>
            <i class="fa fa-external-link" aria-hidden="true"></i></Link> (Explore Domains)</label>
            <select required name="interest" value={interest} onChange={onChange}>
                    <option value="">--Select--</option>
                    <option value="Smart Village Revolution">1. Smart Village Revolution</option>
                    <option value="Ap Panchayat Raj & Rural Development">2. Ap Panchayat Raj & Rural Development </option>
                    <option value="AP Krishna & Godavari Canal Cleaning Project.">3. AP Krishna & Godavari Canal Cleaning Project.</option>
                    <option value="AP Disaster Management System">4. AP Disaster Management System</option>
                    <option value="AP Fisheries Department">5. AP Fisheries Department</option>
                    <option value="AP Health Department">6. AP Health Department</option>
                    <option value="Ap Tourism Department">7. Ap Tourism Department</option>
                    <option value="Ap Cultural Department">8. Ap Cultural Department </option>
                    <option value="Ap Science & Technology Department">9. Ap Science & Technology Department </option>
                    <option value="Ap Handloom & Textiles Department">10. Ap Handloom & Textiles Department</option>
                    <option value="Ap Tribal Welfare Department">11. Ap Tribal Welfare Department</option>
                    <option value="Red Cross Organization">12. Red Cross Organization</option>
                    <option value="UNICEF">13. UNICEF</option>
                  </select> <br />
          </div>
         </div>



         <button disabled={isSubmitting} >
          {isSubmitting ? (
            <>
              <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>{" "}
              Data Processing...
            </>
          ) : (
            "Register for Social Internship"
          )}
        </button>



        </form>
      </div>

    <Footer></Footer>
    </Fragment>
  );
}

export default Register;
