import * as S from "./LocationForm.style";
import Text from "../Text";
import { Address, kakaoMapApi } from "src/apis/api/kakaoMapApi";
import { useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import { useRef } from "react";
import DistanceSlider from "../DistanceSlider";
import { userInfo, userLocation } from "src/recoil/user";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LocationModal } from "src/recoil/modal";
import { axiosAuthInstance } from "src/apis/utils/axiosInstances";
import Button from "../Button";

const LocationForm = () => {
  const distance = useRef<number>(5);
  const [loginUser, setLoginUser] = useRecoilState(userInfo);
  const setOpenLocationModal = useSetRecoilState(LocationModal);
  const [locationName, setLocationName] = useRecoilState(userLocation);
  const [kakaoLoading, setKakaoLoading] = useState<boolean>(true);
  const [address, setAddress] = useState<Address>({
    address_name: "",
    region_1depth_name: "",
    region_2depth_name: "",
    region_3depth_name: "",
    mountain_yn: "",
    main_address_no: "",
    sub_address_no: "",
  });

  const geolocation = useGeolocation({});

  const setDistance = (value: number) => {
    if (distance.current) {
      distance.current = value;
    }
  };

  useEffect(() => {
    if (loginUser.searchDistance) {
      setDistance(loginUser.searchDistance);
    }
  }, []);

  useEffect(() => {
    setKakaoLoading(true);
    async function fetchAddress() {
      if (geolocation.latitude && geolocation.longitude) {
        await kakaoMapApi(
          geolocation.latitude,
          geolocation.longitude,
          setAddress
        );
        setKakaoLoading(false);
      }
    }
    fetchAddress();
  }, [geolocation.latitude, geolocation.longitude]);

  const handleSubmit = () => {
    setLoginUser({
      ...loginUser,
      longitude: geolocation.longitude,
      latitude: geolocation.latitude,
      searchDistance: distance.current,
    });
    setLocationName(address.region_3depth_name);
    axiosAuthInstance({
      method: "PUT",
      url: "/api/users/location",
      data: {
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
        searchDistance: distance.current,
      },
    }).then((res) => {
      if (res.status === 200) {
        setOpenLocationModal(false);
      } else {
        alert("설정이 완료되지 않았습니다.");
      }
    });
  };

  return (
    <S.Container>
      <S.Title>위치 설정</S.Title>
      <S.Content>
        <Text size="18px">현재 위치를 기준으로 내 동네가 설정됩니다. </Text>
        <br />
        <Text>현 위치</Text>
        {kakaoLoading ? (
          <Text>설정 중...</Text>
        ) : (
          <Text weight="600">
            {address.region_1depth_name} {address.region_2depth_name}{" "}
            {address.region_3depth_name}
          </Text>
        )}
        <br />
        <Text size="16px">
          현 위치를 기준으로 매칭 가능한 거리를 설정해주세요
        </Text>
      </S.Content>
      <S.SliderWrapper>
        <DistanceSlider setDistance={setDistance} distance={distance.current} />
      </S.SliderWrapper>
      <Button
        buttonType="SUBMIT"
        width="150px"
        height="45px"
        borderRadius="10px"
        fontSize="16px"
        onClick={handleSubmit}
        disabled={kakaoLoading}
      >
        설정 완료
      </Button>
    </S.Container>
  );
};

export default LocationForm;
