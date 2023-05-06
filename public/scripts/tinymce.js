window.onload = function() {
    tinymce.init({
      selector: '#tiny-mce-post-body',
      plugins: "advlist lists link autolink autosave code emoticons image media preview table wordcount",
      toolbar: 'bold italic underline | alignleft aligncenter alignright alignjustify | bullist numtist outdent indent | link image media | forecolor backcotor emoticons | code preview',
      a11y_advanced_options: true,
      height: 450,
      automatic_uploads: true,
      images_upload_url: '/uploads/postimage',
      relative_urls: false,
      images_upload_handler: function(blobInfo) {
        return new Promise((resolve, reject) => {
          let headers = new Headers();
          headers.append('Accept', 'Application/JSON');
  
          let formData = new FormData();
          formData.append('post-image', blobInfo.blob(), blobInfo.filename());
  
          let req = new Request('/uploads/postimage', {
            method: 'POST',
            headers,
            mode: 'cors',
            body: formData
          });
  
          fetch(req)
            .then(res => res.json())
            .then(data => {
              console.log(data); 
              resolve(data.imgUrl); 
            })
            .catch(error => {
              console.error(error);
              reject('HTTP Error'); 
            });
        });
      }
    });
  };
<<<<<<< HEAD
  
=======
  
>>>>>>> d5456f5150038d13202e2698d9ae074795e51a8c
