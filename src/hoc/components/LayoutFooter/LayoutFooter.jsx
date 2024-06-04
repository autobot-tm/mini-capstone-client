import Icon from '@ant-design/icons/lib/components/Icon'
import React from 'react'

const LayoutFooter = () => {
  <div className='bg-purple text-white p-20 flex items-center'>
          <div className="w-1/3 px-10 text-center">
                <div className="front-medium text-2x1">Tên Công ty</div>
                <div className='text-2xl font-light my-5'>Tên trang Web</div>
                <div>
                Học không biết chán, dạy người không biết mỏi.
                </div>
                <div className="font-medium text-xl italic my-5">Liên Hệ</div>
                <div className="flex justify-between px-28 text-4xl">
                  <Icon icon="ic:baseline-facebook"/>
                  <Icon icon="ic:baseline-youtube"/>
                  <Icon icon="ri:google-fill" style={{color:"white"}}/>
                </div>
          </div>
          <div className="w-1/3 px-10 italic">
          <div className="text-2xl font-medium">Hà Nội</div>
        <div>
          Tầng 7 15 & 20, Tòa nhà Capital - 109 Trần Hưng Đạo, Quận Hoàn Kiếm,
          Hà Nội, Việt Name
        </div>
        <div className="text-2xl font-medium mt-5">TP.Hồ Chí Minh</div>
        <div>
          Tầng 29 & 30, Tòa nhà LIM 9-11 Tôn Đức Thắng, Quận 1, Thành phố Hồ Chí
          Minh, Việt Nam
        </div>
          </div>
          <div className="w-1/3 px-10 italic">
        <div className="text-2xl font-medium">Văn phòng Gia sư Quận Gò Vấp</div>
        <div>
        672A28, Đường Phan Văn Trị, Phường 10, Quận Gò Vấp 
        Khu CityLand Park Hill
        </div>
        <div className="text-2xl font-medium mt-5">Văn phòng Gia sư Đất Việt Quận Gò Vấp</div>
        <div>
        672A28, Đường Phan Văn Trị, Phường 10, Quận Gò Vấp 
        Khu CityLand Park Hill
        </div>
  </div>
  </div>
}
export default LayoutFooter
