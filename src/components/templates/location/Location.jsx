import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { iranCities } from "src/constants/iranCities";

function Location() {
  const [openModal, setOpenModal] = useState(false);
  const [locationList, setLocationList] = useState(["تهران"]);

  const locationHandler = (cityName) => {
    if (!locationList.find((findCity) => findCity === cityName)) {
      setLocationList([...locationList, cityName]);
    } else {
      setLocationList(locationList.filter((city) => city !== cityName));
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="light">
        {locationList.length === 0 && "جستجو در تمام شهرها"}
        {locationList.length === 1 && locationList[0]}
        {locationList.length > 1 && `${locationList.length} شهر انتخاب شده`}
        <FaLocationArrow className="mr-2 h-5 w-5" />
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>انتخاب شهر</ModalHeader>
        <ModalBody>
          <div className="flex flex-wrap gap-3">
            {iranCities.map((city) => (
              <Button
                onClick={() => locationHandler(city.city)}
                color={
                  locationList.findIndex((cityName) => cityName === city.city) !== -1
                    ? "default"
                    : "light"
                }
                key={city.id}
              >
                {city.city}
              </Button>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="me-3" onClick={() => setOpenModal(false)}>
            ثبت
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            بستن
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Location;
