
 // Image array
 const images = [
    { src: "img/Photo album/AmaraFulLGrip.png", name: "Amara Full Grip" },
    { src: "img/Photo album/BettKuscheln.jpg", name: "Bett Kuscheln" },
    { src: "img/Photo album/Kuscheln.jpg", name: "Kuscheln" },
    { src: "img/Photo album/Kuscheln3.jpg", name: "Kuscheln 3" },
    { src: "img/Photo album/Kuscheln4.jpg", name: "Kuscheln 4" },
    { src: "img/Photo album/KuschelnMilanRücken.jpg", name: "Kuscheln Milan Rücken" },
    { src: "img/Photo album/MilanChuey.jpg", name: "Milan Chuey" },
    { src: "img/Photo album/MilanFunnyCouch.jpg", name: "Milan Funny Couch" },
    { src: "img/Photo album/MilanModel.jpg", name: "Milan Model" },
    { src: "img/Photo album/MilanModel2.jpg", name: "Milan Model 2" },
    { src: "img/Photo album/MilanModel3.jpg", name: "Milan Model 3" },
    { src: "img/Photo album/MilanSchwein.jpg", name: "Milan Schwein" },
    { src: "img/Photo album/TMKuscheln.jpg", name: "TM Kuscheln" },
    { src: "img/Photo album/TMRobinSitz.jpg", name: "TM Robin Sitz" },
    { src: "img/Photo album/TysonFunnyCouch.jpg", name: "Tyson Funny Couch" },
    { src: "img/Photo album/TysonModel.jpg", name: "Tyson Model" },
    { src: "img/Photo album/TysonModel2.jpg", name: "Tyson Model 2" },
    { src: "img/Photo album/TysonZwinker.jpg", name: "Tyson Zwinker" },
  ];


  // HTML - Elemente durch Variablen adressieren 
  const imageGrid = document.querySelector(".image-grid");  //Query Selector findet das erste Element im HTML, das dem angegebenen CSS entspricht
  const modal = document.getElementById("imageModal");
  const modalImage =document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const prevButton =document.getElementById("prevButton");
  const nextButton =document.getElementById("nextButton");
  const imageCounter = document.getElementById("imageCounter");
  const closeButton = document.getElementById("closeButton");
 let currentIndex = 0;

  // imgs Erstellen 

  function createImages(image, index)  {  // index für die Position des Bildes im Array , z.B. 1/18
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.name;
    img.addEventListener("click", function() {
      openModal(index);
    });
    return img;
 
  }  

  // imgs Einfügen bei imageGrid
  
  function insertImages() {
    for (let i = 0 ; i < images.length ; i++) {
      let picture = createImages(images[i],i);
      imageGrid.appendChild(picture);
    }
  }

  // richtiges modal öffnen
  function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].name;
    modalCaption.textContent = images[currentIndex].name;
    imageCounter.textContent = (currentIndex + 1) + " / " + images.length;
    modal.style.display = "block";
  }

  // modal schließen
  function closeModal(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

   // modal schließen mit x button
   function closeModalButton(event) {
    if (event.target === closeButton) {
      modal.style.display = "none";
    }
  }

  //navigation in beide richtungen möglich je nach funktionsaufruf
  function navigate(direction) {
    currentIndex += direction;
    if (currentIndex< 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].name;
    modalCaption.textContent = images[currentIndex].name;
    imageCounter.textContent = (currentIndex + 1) + " / " + images.length;
    modal.style.display = "block";
  }

  //Event zum schließen des Modals 
  modal.addEventListener("click",closeModal);

  //Event schließen mit x
  closeButton.addEventListener("click",closeModalButton);

  //navigatoin rückwärts
  prevButton.addEventListener("click",function() {
    navigate(-1);
  });

  //navigatoin vorwärts
  nextButton.addEventListener("click",function() {
    navigate(1);
  });
  // Funktionsaufruf, damit die Bilder angezeigt werden

  insertImages();





 