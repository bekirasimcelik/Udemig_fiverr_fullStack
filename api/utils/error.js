//* Aldığı parametrelere göre hata middleware'ne gönderilmek üzere bir error nesnesi oluşturulacak

const error = (status, message) => {
  //* Bir err nesnesi oluştur
  const err = new Error();

  //* Hata nesnesini güncelle
  err.message = message;
  err.status = status;
};

export default error;
