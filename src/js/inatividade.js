setTimeout(() => {
  const modal = document.getElementById("popup1");
  modal.classList.add("mostrar");
  modal.addEventListener("click", (e) => {
    if (e.target.id == "popup1" || e.target.className == "fechar_modal") {
      modal.classList.remove("mostrar");
      setTimeout(() => {
        const modal = document.getElementById("popup2");
        modal.classList.add("mostrar");
        modal.addEventListener("click", (e) => {
          if (e.target.id == "popup2" || e.target.className == "fechar_modal") {
            modal.classList.remove("mostrar");
            setTimeout(() => {
              const modal = document.getElementById("popup3");
              modal.classList.add("mostrar");
              modal.addEventListener("click", (e) => {
                if (
                  e.target.id == "popup3" ||
                  e.target.className == "fechar_modal"
                ) {
                  modal.classList.remove("mostrar");
                  setTimeout(() => {
                    const modal = document.getElementById("popup4");
                    modal.classList.add("mostrar");
                    modal.addEventListener("click", (e) => {
                      if (
                        e.target.id == "popup4" ||
                        e.target.className == "fechar_modal"
                      ) {
                        modal.classList.remove("mostrar");
                        setTimeout(() => {
                          const modal = document.getElementById("popup5");
                          modal.classList.add("mostrar");
                          modal.addEventListener("click", (e) => {
                            if (
                              e.target.id == "popup5" ||
                              e.target.className == "fechar_modal"
                            ) {
                              modal.classList.remove("mostrar");
                              setTimeout(() => {
                                const modal = document.getElementById("popup6");
                                modal.classList.add("mostrar");
                                modal.addEventListener("click", (e) => {
                                  if (
                                    e.target.id == "popup6" ||
                                    e.target.className == "fechar_modal"
                                  ) {
                                    modal.classList.remove("mostrar");
                                  }
                                });
                              }, 1000);
                            }
                          });
                        }, 1000);
                      }
                    });
                  }, 1000);
                }
              });
            }, 1000);
          }
        });
      }, 1000);
    }
  });
}, 600000);
