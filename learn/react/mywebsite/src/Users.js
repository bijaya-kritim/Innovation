import React from 'react'

export default function Users() {
         const user = [
            { id: 1, name: "sukute", image: "https://imgs.search.brave.com/98iAqFQu5_ixzIms9nnOi2CZLhA5eDkyekT62JuIH5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS90ekFTVmdRRXBD/bEw4NzNUWno4am1M/MnpjYXhIYkdkTVJY/NnNEZnMxMGpGTlJQ/LUFBYjZlRTNPd3d6/UmlGUzg5elZwcT13/NTI2LWgyOTYtcnc" },
            { id: 2, name: "Seerish", image: "https://imgs.search.brave.com/iRjhiAuRJt-LANYbfN3CPn3XiGulpPGSazcul96O1vQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzEy/MTg2NTUvZmVhdHVy/ZV9TdG9ja0ltYWdl/c19sZWFkXzAzMngu/anBn" },
            { id: 3, name: "rumal", image: "https://imgs.search.brave.com/Mkz_P_cuyR6AqAPbLGdwe_gp1KD8KSOBSQaAs0zP_aQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaW1hZ2Vz/L2FpL2ltYWdlLWdl/bmVyYXRvci9jb3Zl/ci9pbWFnZS1nZW5l/cmF0b3ItaGVhZGVy/LndlYnA_dz0zODQw/Jmg9MTkyMCZxPTkw/JTIwMzg0MHcsJTIw/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaW1hZ2Vz/L2FpL2ltYWdlLWdl/bmVyYXRvci9jb3Zl/ci9pbWFnZS1nZW5l/cmF0b3ItaGVhZGVy/LndlYnA_dz03Njgw/Jmg9Mzg0MCZxPTkw/JTIwNzY4MHc" },
            { id: 4, name: "Bindi ",image: "https://imgs.search.brave.com/ph3CUhZjOU0uMo2NFbWUp6cUQPVn40Dm9T1OFQ346AA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9taW5pbWFsaXN0/LWhlYWRlci1waG90/by13aXRoLXdvbWFu/LXdpdGgtY2xvc2Vk/LWV5ZXMtZnJlZS1p/bWFnZS5qcGVnP3c9/NjAwJnF1YWxpdHk9/ODA" },
            { id: 5, name: "kricks", image: "https://imgs.search.brave.com/1sIXBsvcVhri_aDSOknSa1AAn_EOTRILUY-fkc4llkQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uZXh0/LWltYWdlcy4xMjNy/Zi5jb20vaW5kZXgv/X25leHQvaW1hZ2Uv/P3VybD1odHRwczov/L2Fzc2V0cy1jZG4u/MTIzcmYuY29tL2lu/ZGV4L3N0YXRpYy9h/c3NldHMvYWxsLWlu/LW9uZS1wbGFuL3N1/cnJlYWwtZmFjZXMt/YWkucG5nJnc9Mzg0/MCZxPTc1" },
            { id: 6, name: "kale", image: "https://imgs.search.brave.com/Mw94U2xcdrEWyEsnGckdCrhFsvsjFM1mc9jeqlE7MQE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaW1hZ2Vz/L3Rvb2xzL3YyL3Nr/ZXRjaC53ZWJwP3c9/Mzg0MCZoPTE5MjAm/cT03NSUyMDM4NDB3/LCUyMGh0dHBzOi8v/Y2RuLWZyb250LmZy/ZWVwaWsuY29tL2lt/YWdlcy90b29scy92/Mi9za2V0Y2gud2Vi/cD93PTc2ODAmaD0z/ODQwJnE9OTAlMjA3/Njgwdw" }
         ]
  return (
   <div>
    <h1> List of Users</h1>
   { user.map(users =>(
    <div key= { users.id}>
        <img src={users.image} alt={users.name} width=" 100" />
        <h2> ID: {users.id}</h2>
        <h2>{ users.name}</h2>


    </div>


   ))

   

    }
   </div>
  )
}
