import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import './SvrRegister.css'; 

import NavBar from '../../../components/NavigationBar/NavBar'; 
import Footer from '../../../components/Footer/Footer';


const districtList = {
  AndraPradesh: ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"],

  ArunachalPradesh: ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"],

  Assam: ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],

  Bihar: ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
  Chhattisgarh: ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir-Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Korea","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
  Chhattisgarh: ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
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

const FacultyRegister = () => {

  const defaultState = '';
  const defaultDistrict = '';

  const [selectedState, setSelectedState] = useState(defaultState);
  const [selectedDistrict, setSelectedDistrict] = useState(defaultDistrict);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict('');
    setInputs({ ...inputs, empstate: event.target.value });
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setInputs({ ...inputs, empdistrict: event.target.value });
  };

  const districtOptions = selectedState
    ? districtList[selectedState].map((district) => (
        <option key={district} value={district}>
          {district}
        </option>
      ))
    : null;


  const [inputs, setInputs] = useState({
    empid:"", 
    empname:"", 
    empgender:"", 
    empbranch:"",
    emmail:"",
    empmobile:"", 
    empstate:"",
    empdistrict:"",
    empinterest:""
  });

  const [isEmpnoAlreadyRegistered, setisEmpnoAlreadyRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // new state variable

  const { empid, empname, empgender, empbranch, empmail, empmobile, empstate, empdistrict, empinterest } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    
  }

  const onSubmitForm = async e => {
    e.preventDefault(); 
    if (empid.length !== 4) {
      alert("Please enter a valid ID Number");
      return;
    }
    // Check if mobile_number and parent_mobile are different
  if(empmobile.length !== 10) {
        alert("Please enter a valid mobile number");
    }
    try {

      setIsSubmitting(true); 

      const body = { empid, empname, empgender, empbranch, empmail, empmobile, empstate, empdistrict, empinterest};
      const response = await fetch(
        "/faculty",
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
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Form Submitted Successfully");
      }, 1500);
    }
  }; 


  const submitButton = isSubmitting ? (
    <button disabled>
      <i className="fa fa-spinner fa-spin"></i>Data Processing...
    </button>
  ) : (
    <button>Submit</button>
  );




  return (
    <Fragment>
      <NavBar/>
      <div className="svrRegisterContainer">
      <div className="formHeading">
           <h1> Y22 Social Internship Registation  <br />Student Activity Center</h1>
           <h1>Faculty Registrations</h1>
           <hr />
           <p>Engineering Departments: 11th May - 24th May 2023 <br />MHS Departments: 25th May - 7th June 2023</p>
          </div>
        <form onSubmit={onSubmitForm}>
         <div className="formSection-one">
          <div className="idnoClass">
              <label htmlFor="empid">Register University Employee ID <span>*</span></label> <br />
              <input required type="text" name="empid" placeholder="Employee ID Number" value={empid} onChange={onChange} /> <br />
            </div>

            <div className="nameClass">
              <label htmlFor="empname">Name as per University Records <span>*</span></label> <br />
              <input required type="text" name="empname" placeholder="Name" value={empname} onChange={onChange} /> <br />
            </div>
         </div>

         <div className="formSection-one">
            <div className="genderClass">
              <label htmlFor="empgender">Gender<span>*</span></label> <br />
                  <select required name="empgender" value={empgender} onChange={onChange}>
                    <option value="">--Select--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="NOT">Prefer Not to Say</option>
                  </select> <br />
            </div>
            <div className="branchClass">
            <label htmlFor="empbranch">Department <span>*</span></label> <br />
              <select required name="empbranch" id='empbranch' value={empbranch} onChange={onChange}>
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
              <div className="primaryMailClass">
                <label htmlFor="empmail">Primary Email ID <span>*</span></label> <br />
                <input required type="text" name="empmail" placeholder="primaryMail" value={empmail} onChange={onChange} /> <br />
              </div>
              <div className="mobileClass">
                <label htmlFor="empmobile">Mobile Contact <span>*</span></label> <br />
                <input required type="text" name="empmobile" placeholder="mobile_number" value={empmobile} onChange={onChange} /> <br />
              </div>
         </div>


          
          <div className="formSection-one">
          </div>

          <div className="formSection-one">
            <div className='StateClass'>
            <label htmlFor="empstate">Select a state <span>*</span> </label>
            <select id="empstate" name="empstate" value={empstate} onChange={handleStateChange} required>
              <option value="">--Select State--</option>
              {Object.keys(districtList).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>

              <div className='DistrictClass'>
                <label htmlFor="empdistrict">Select a district: <span>*</span> </label>
                <select id="empdistrict" name='empdistrict' value={empdistrict} onChange={handleDistrictChange} required>
                  <option value="">--Select District--</option>
                  {districtOptions}
                </select>
              </div>
            
          </div>
            

        
         

         <div className="formSection-one">
          <div className="InterestClass">
            <label htmlFor="empinterest">Choose your domain of Interest <span>*</span> <Link to='/Home/SvrHome'>
            <i class="fa fa-external-link" aria-hidden="true"></i></Link> (Explore Domains)</label>
            <select required name="empinterest" value={empinterest} onChange={onChange}>
                    <option value="">--Select--</option>
                    <option value="Agriculture and Co-operation">1. Agriculture and Co-operation</option>
                    <option value="Animal Husbandry and Fisheries department">2. Animal Husbandry and Fisheries department</option>
                    <option value="Backward Classes Welfare Department">3. Backward Classes Welfare Department</option>
                    <option value="Consumer Affairs, Food and Civil supplies">4. BConsumer Affairs, Food and Civil supplies</option>
                    <option value="Handlooms and Textiles">5. Handlooms and Textiles</option>
                    <option value="Endowments">6. Endowments</option>
                    <option value="Energy">7. Energy</option>
                    <option value="Finance">8.Finance</option>
                    <option value="Forest">9. Forest</option>
                    <option value="General Administration">10. General Administration</option>
                    <option value="Health, Medical and Family Welfare">11. Health, Medical and Family Welfare</option>
                    <option value="Higher Education">12. Higher Education</option>
                    <option value="Housing">13. Housing</option>
                    <option value="Industries and Commerce">14. Industries and Commerce</option>
                    <option value="Information technology, Electronics and Communications">15. Information technology, Electronics and Communications</option>
                    <option value="Infrastructure and Investment">16. Infrastructure and Investment</option>
                    <option value="Labour, Employment training and Factories">17. Labour, Employment training and Factories</option>
                    <option value="Law Department">18. Law Department</option>
                    <option value="Minorities Welfare Department">19. Minorities Welfare Department</option>
                    <option value="Municipal Administration and Urban Development Department">20. Municipal Administration and Urban Development Department</option>
                    <option value="Panchayat Raj & Rural Development Department">21. Panchayat Raj & Rural Development Department</option>
                    <option value="Planning">22. Planning</option>
                    <option value="Public Enterprise">23. Public Enterprise</option>
                    <option value="Revenue Department">24. Revenue Department</option>
                    <option value="Rural Water Supply and Sanitation Department">25. Rural Water Supply and Sanitation Department</option>
                    <option value="School Welfare Department">26. School Welfare Department</option>
                    <option value="Social Welfare Department">27. Social Welfare Department</option>
                    <option value="Transport, Roads and Buildings">28. Transport, Roads and Buildings</option>
                    <option value="Water Resources Department">29. Water Resources Department</option>
                    <option value="Women, Children, Disabled and Senior Citizens Welfare">30. Women, Children, Disabled and Senior Citizens Welfare</option>
                    <option value="Youth Advancement, Tourism and Culture">31. Youth Advancement, Tourism and Culture</option>
                  </select> <br />
          </div>
         </div>
         <button disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>{" "}
              Submitting...
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

export default FacultyRegister;