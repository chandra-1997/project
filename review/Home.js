import React from 'react';

export default function Home(){



    const data = [
        {
          "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Biology-01.jpeg?alt=media&token=8eea799d-29a3-4628-a384-e3a2d10e7c5a",
          "Version": "EN-V1",
          "Name": "Body Joints - Elbow"
        },
         {
          "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Biology-01.jpeg?alt=media&token=8eea799d-29a3-4628-a384-e3a2d10e7c5a",
          "Version": "HI-V1",
          "Name": "Body Joints - Ball-Socket Joint"
        },
         {
          "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Chemistry-01.jpeg?alt=media&token=92a52c20-0edb-43db-b006-4d5bf1724970",
          "Version": "EN-V1",
          "Name": "Chemical Change - Heating Sugar"
        },
         {
          "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Chemistry-01.jpeg?alt=media&token=92a52c20-0edb-43db-b006-4d5bf1724970",
          "Version": "EN-V1",
          "Name": "Acids-Bases - Conductivity"
        },
        
            {
              "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Biology-01.jpeg?alt=media&token=8eea799d-29a3-4628-a384-e3a2d10e7c5a",
              "Version": "EN-V1",
              "Name": "Body Joints - Elbow"
            },
             {
              "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Biology-01.jpeg?alt=media&token=8eea799d-29a3-4628-a384-e3a2d10e7c5a",
              "Version": "HI-V1",
              "Name": "Body Joints - Ball-Socket Joint"
            },
             {
              "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Chemistry-01.jpeg?alt=media&token=92a52c20-0edb-43db-b006-4d5bf1724970",
              "Version": "EN-V1",
              "Name": "Chemical Change - Heating Sugar"
            },
             {
              "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Chemistry-01.jpeg?alt=media&token=92a52c20-0edb-43db-b006-4d5bf1724970",
              "Version": "EN-V1",
              "Name": "Acids-Bases - Conductivity"
            },
            {
                "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Biology-01.jpeg?alt=media&token=8eea799d-29a3-4628-a384-e3a2d10e7c5a",
                "Version": "EN-V1",
                "Name": "Body Joints - Elbow"
              },
               {
                "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Biology-01.jpeg?alt=media&token=8eea799d-29a3-4628-a384-e3a2d10e7c5a",
                "Version": "HI-V1",
                "Name": "Body Joints - Ball-Socket Joint"
              },
               {
                "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Chemistry-01.jpeg?alt=media&token=92a52c20-0edb-43db-b006-4d5bf1724970",
                "Version": "EN-V1",
                "Name": "Chemical Change - Heating Sugar"
              },
               {
                "IconUrl": "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Chemistry-01.jpeg?alt=media&token=92a52c20-0edb-43db-b006-4d5bf1724970",
                "Version": "EN-V1",
                "Name": "Acids-Bases - Conductivity"
              }
          
      ];
      

     
    return (
        <>
        <div className="container-fluid m-3 ">
            <div className="d-flex flex-wrap d-flex justify-content-center justify-content-between">
                {
                    data.map(item => 
                        <div className="card m-3 p-3" style={{ maxWidth: '400px',boxShadow: "-5px 0px  0px  0px #fac800" }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-danger" key={item.Name}>{item.Name}</h5>
                                    </div>
                                </div>
                                <div className="col-md-4" key={item.IconUrl}>
                                    <img src={item.IconUrl}  className="img-fluid rounded-start" />
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    );
};


