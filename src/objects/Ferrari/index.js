import React, { useRef } from 'react'
import {
  CarPaint,
  Leather,
  Glass,
  RedGlass,
  Rims,
  OrgangeGlass,
  CarbonFibre,
  Grill,
  Mirror
} from '../../Materials'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const mesh = useRef()
  // useFrame(state => (
  //   mesh.current.rotation.z = mesh.current.rotation.z += 0.003
  // ))
  const { nodes, materials } = useGLTF('/f40.gltf')
  
  return (
    <mesh ref={mesh}>
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.glossy_plastic_08.geometry} material={materials.wire_005005005}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.car_paint_red20.geometry} material={nodes.car_paint_red20.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.car_paint_red21.geometry} material={nodes.car_paint_red21.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.car_paint_red22.geometry} material={nodes.car_paint_red22.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.Black_metal_00.geometry} material={nodes.Black_metal_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_08.geometry} material={nodes.chrome_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.Black_metal_02.geometry} material={nodes.Black_metal_02.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.Black_metal_01.geometry} material={nodes.Black_metal_01.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.car_paint_red23.geometry} material={nodes.car_paint_red23.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.car_paint_red24.geometry} material={nodes.car_paint_red24.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_11.geometry} material={nodes.black_plastic_11.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_15.geometry} material={nodes.black_plastic_rough_15.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_14.geometry} material={nodes.black_plastic_rough_14.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.metal_black_08.geometry} material={nodes.metal_black_08.material} >
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.plastic_white_rough_03.geometry} material={nodes.plastic_white_rough_03.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_16.geometry} material={nodes.black_plastic_rough_16.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_09.geometry} material={nodes.black_plastic_09.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_10.geometry} material={nodes.black_plastic_10.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.glossy_plastic_05.geometry} material={nodes.glossy_plastic_05.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.glossy_plastic_06.geometry} material={nodes.glossy_plastic_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glossy_plastic_07.geometry} material={nodes.glossy_plastic_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_12.geometry} material={nodes.black_plastic_12.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_13.geometry} material={nodes.black_plastic_13.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.emblem_rect_00.geometry} material={nodes.emblem_rect_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glass_orange_foggy_00.geometry} material={nodes.glass_orange_foggy_00.material}>
        <OrgangeGlass />
      </mesh>
      <mesh geometry={nodes.chrome_07.geometry} material={nodes.chrome_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rims_bolts_01.geometry} material={nodes.rims_bolts_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_08.geometry} material={nodes.black_plastic_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glass_white_foggy_04.geometry} material={nodes.glass_white_foggy_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glass_headlight_stripes_00.geometry} material={nodes.glass_headlight_stripes_00.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.interior_img_02.geometry} material={nodes.interior_img_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.carbon_fiber_warm_01.geometry} material={nodes.carbon_fiber_warm_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_brushed_06.geometry} material={nodes.chrome_brushed_06.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gauge_00.geometry} material={nodes.gauge_00.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.interior_img_03.geometry} material={nodes.interior_img_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_white_rough_02.geometry} material={nodes.plastic_white_rough_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_13.geometry} material={nodes.black_plastic_rough_13.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.clear_glass_01.geometry} material={nodes.clear_glass_01.material} transparent>
        <Glass />
      </mesh>
      <mesh geometry={nodes.clear_glass_00.geometry} material={nodes.clear_glass_00.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_12.geometry} material={nodes.center_console_cloth_12.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_15.geometry} material={nodes.black_plastic_matte_15.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.red_seats_01.geometry}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_11.geometry} material={nodes.center_console_cloth_11.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.metal_black_07.geometry} material={nodes.metal_black_07.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.chrome_int_00.geometry} material={nodes.chrome_int_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_black_06.geometry} material={nodes.metal_black_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_13.geometry} material={nodes.black_plastic_matte_13.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.mirror_02.geometry} material={nodes.mirror_02.material} >
        <Mirror />
      </mesh>
      <mesh geometry={nodes.leather_01.geometry} material={nodes.leather_01.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_12.geometry} material={nodes.black_plastic_matte_12.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_11.geometry} material={nodes.black_plastic_matte_11.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_17.geometry} material={nodes.black_plastic_rough_17.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_10.geometry} material={nodes.black_plastic_matte_10.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_12.geometry} material={nodes.black_plastic_rough_12.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_11.geometry} material={nodes.black_plastic_rough_11.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_10.geometry} material={nodes.black_plastic_rough_10.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_09.geometry} material={nodes.black_plastic_rough_09.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_rough_09.geometry} material={nodes.plastic_rough_09.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_rough_08.geometry} material={nodes.plastic_rough_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_09.geometry} material={nodes.black_plastic_matte_09.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_08.geometry} material={nodes.black_plastic_rough_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_08.geometry} material={nodes.black_plastic_matte_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_07.geometry} material={nodes.black_plastic_matte_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_06.geometry} material={nodes.black_plastic_matte_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_07.geometry} material={nodes.black_plastic_rough_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_06.geometry} material={nodes.black_plastic_rough_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_05.geometry} material={nodes.black_plastic_rough_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_04.geometry} material={nodes.black_plastic_rough_04.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_05.geometry} material={nodes.black_plastic_matte_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_rough_07.geometry} material={nodes.plastic_rough_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_04.geometry} material={nodes.black_plastic_matte_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_rough_06.geometry} material={nodes.plastic_rough_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_03.geometry} material={nodes.black_plastic_rough_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_02.geometry} material={nodes.black_plastic_rough_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_01.geometry} material={nodes.black_plastic_rough_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_00.geometry} material={nodes.black_plastic_rough_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_14.geometry} material={nodes.black_plastic_matte_14.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.deep_black_00.geometry} material={nodes.deep_black_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_10.geometry} material={nodes.center_console_cloth_10.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_black_05.geometry} material={nodes.metal_black_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_09.geometry} material={nodes.center_console_cloth_09.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_08.geometry} material={nodes.center_console_cloth_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_07.geometry} material={nodes.center_console_cloth_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_rough_05.geometry} material={nodes.plastic_rough_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_06.geometry} material={nodes.center_console_cloth_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_05.geometry} material={nodes.center_console_cloth_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.carbon_fiber_04.geometry} material={nodes.carbon_fiber_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_rough_04.geometry} material={nodes.plastic_rough_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_rough_03.geometry} material={nodes.plastic_rough_03.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_04.geometry} material={nodes.center_console_cloth_04.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_03.geometry} material={nodes.center_console_cloth_03.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_02.geometry} material={nodes.center_console_cloth_02.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_13.geometry} material={nodes.center_console_cloth_13.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_01.geometry} material={nodes.center_console_cloth_01.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.center_console_cloth_00.geometry} material={nodes.center_console_cloth_00.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.chrome_brushed_05.geometry} material={nodes.chrome_brushed_05.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.interior_img_00.geometry} material={nodes.interior_img_00.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.windows_02.geometry} material={nodes.windows_02.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.grill_03.geometry} material={nodes.grill_03.material}>
        <Grill />
      </mesh>
      <mesh geometry={nodes.carbon_fiber_warm_00.geometry} material={nodes.carbon_fiber_warm_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.red_seats_00.geometry} material={nodes.red_seats_00.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.metal_black_03.geometry} material={nodes.metal_black_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_18.geometry} material={nodes.black_plastic_rough_18.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_white_rough_00.geometry} material={nodes.plastic_white_rough_00.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.interior_img_01.geometry} material={nodes.interior_img_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.steering_wheel_leather_01.geometry} material={nodes.steering_wheel_leather_01.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.leather_00.geometry} material={nodes.leather_00.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.glossy_metal_00.geometry} material={nodes.glossy_metal_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_black_04.geometry} material={nodes.metal_black_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.steering_wheel_horn_00.geometry} material={nodes.steering_wheel_horn_00.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.steering_wheel_leather_00.geometry} material={nodes.steering_wheel_leather_00.material}>
        <Leather />
      </mesh>
      <mesh geometry={nodes.plastic_rough_02.geometry} material={nodes.plastic_rough_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_white_rough_01.geometry} material={nodes.plastic_white_rough_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_19.geometry} material={nodes.black_plastic_rough_19.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.signature_00.geometry} material={nodes.signature_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_07.geometry} material={nodes.black_plastic_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.headlight_glass_04.geometry} material={nodes.headlight_glass_04.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.metal_black_02.geometry} material={nodes.metal_black_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rubber_00.geometry} material={nodes.rubber_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glossy_plastic_04.geometry} material={nodes.glossy_plastic_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.grill_05.geometry} material={nodes.grill_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.grill_02.geometry} material={nodes.grill_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.grill_01.geometry} material={nodes.grill_01.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glossy_plastic_03.geometry} material={nodes.glossy_plastic_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glossy_plastic_02.geometry} material={nodes.glossy_plastic_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glossy_plastic_09.geometry} material={nodes.glossy_plastic_09.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_plastic_05.geometry} material={nodes.gray_plastic_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_plastic_04.geometry} material={nodes.gray_plastic_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_plastic_03.geometry} material={nodes.gray_plastic_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_plastic_02.geometry} material={nodes.gray_plastic_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_plastic_01.geometry} material={nodes.gray_plastic_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_plastic_00.geometry} material={nodes.gray_plastic_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_14.geometry} material={nodes.black_plastic_14.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_20.geometry} material={nodes.black_plastic_20.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_19.geometry} material={nodes.black_plastic_19.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glass_red_foggy_01.geometry} material={nodes.glass_red_foggy_01.material}>
        <RedGlass />
      </mesh>
      <mesh geometry={nodes.chrome_10.geometry} material={nodes.chrome_10.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rims_bolts_03.geometry} material={nodes.rims_bolts_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_06.geometry} material={nodes.black_plastic_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.emblem_00.geometry} material={nodes.emblem_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_21.geometry} material={nodes.black_plastic_21.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.emblem_01.geometry} material={nodes.emblem_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.signature_01.geometry} material={nodes.signature_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_16.geometry} material={nodes.black_plastic_matte_16.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_rough_20.geometry} material={nodes.black_plastic_rough_20.material}>
        <RedGlass />
      </mesh>
      <mesh geometry={nodes.black_plastic_23.geometry} material={nodes.black_plastic_23.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_brushed_03.geometry} material={nodes.chrome_brushed_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_brushed_02.geometry} material={nodes.chrome_brushed_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.windows_01.geometry} material={nodes.windows_01.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.black_plastic_05.geometry} material={nodes.black_plastic_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.mirror_01.geometry} material={nodes.mirror_01.material}>
        <Mirror />
      </mesh>
      <mesh geometry={nodes.black_plastic_04.geometry} material={nodes.black_plastic_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red17.geometry} material={nodes.car_paint_red17.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.chrome_03.geometry} material={nodes.chrome_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_02.geometry} material={nodes.chrome_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red16.geometry} material={nodes.car_paint_red16.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.glossy_plastic_01.geometry} material={nodes.glossy_plastic_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red15.geometry} material={nodes.car_paint_red15.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.plastic_rough_01.geometry} material={nodes.plastic_rough_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_03.geometry} material={nodes.black_plastic_matte_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_02.geometry} material={nodes.black_plastic_matte_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_black_01.geometry} material={nodes.metal_black_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.carbon_fiber_03.geometry} material={nodes.carbon_fiber_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_03.geometry} material={nodes.black_plastic_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.carbon_fiber_02.geometry} material={nodes.carbon_fiber_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_24.geometry} material={nodes.black_plastic_24.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_brushed_01.geometry} material={nodes.chrome_brushed_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_brushed_00.geometry} material={nodes.chrome_brushed_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.carbon_fiber_00.geometry} material={nodes.carbon_fiber_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red12.geometry} material={nodes.car_paint_red12.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_00.geometry} material={nodes.black_plastic_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.mirror_00.geometry} material={nodes.mirror_00.material}>
        <Mirror />
      </mesh>
      <mesh geometry={nodes.black_plastic_02.geometry} material={nodes.black_plastic_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red13.geometry} material={nodes.car_paint_red13.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_01.geometry} material={nodes.black_plastic_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_00.geometry} material={nodes.chrome_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red14.geometry} material={nodes.car_paint_red14.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.chrome_01.geometry} material={nodes.chrome_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glossy_plastic_00.geometry} material={nodes.glossy_plastic_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.windows_00.geometry} material={nodes.windows_00.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.metal_black_00.geometry} material={nodes.metal_black_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.plastic_rough_00.geometry} material={nodes.plastic_rough_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_00.geometry} material={nodes.black_plastic_matte_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_01.geometry} material={nodes.black_plastic_matte_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.carbon_fiber_01.geometry} material={nodes.carbon_fiber_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_25.geometry} material={nodes.black_plastic_25.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.windows_03.geometry} material={nodes.windows_03.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.car_paint_red26.geometry} material={nodes.car_paint_red26.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_16.geometry} material={nodes.black_plastic_16.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red25.geometry} material={nodes.car_paint_red25.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_22.geometry} material={nodes.black_plastic_22.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glass_orange_foggy_01.geometry} material={nodes.glass_orange_foggy_01.material}>
        <OrgangeGlass />
      </mesh>
      <mesh geometry={nodes.glass_white_foggy_05.geometry} material={nodes.glass_white_foggy_05.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.black_plastic_15.geometry} material={nodes.black_plastic_15.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rims_bolts_00.geometry} material={nodes.rims_bolts_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.grill_04.geometry} material={nodes.grill_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glass_red_foggy_00.geometry} material={nodes.glass_red_foggy_00.material}>
        <RedGlass />
      </mesh>
      <mesh geometry={nodes.chrome_09.geometry} material={nodes.chrome_09.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rearlights_04.geometry} material={nodes.rearlights_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_17.geometry} material={nodes.black_plastic_17.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rearlights_05.geometry} material={nodes.rearlights_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rearlights_08.geometry} material={nodes.rearlights_08.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.rearlights_06.geometry} material={nodes.rearlights_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rearlights_07.geometry} material={nodes.rearlights_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rearlights_bulbs_01.geometry} material={nodes.rearlights_bulbs_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rearlights_bulbs_00.geometry} material={nodes.rearlights_bulbs_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.grill_00.geometry} material={nodes.grill_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_plastic_18.geometry} material={nodes.black_plastic_18.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_05.geometry} material={nodes.chrome_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_06.geometry} material={nodes.chrome_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_04.geometry} material={nodes.chrome_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glass_white_foggy_03.geometry} material={nodes.glass_white_foggy_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glass_white_foggy_02.geometry} material={nodes.glass_white_foggy_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.yellow_glass_01.geometry} material={nodes.yellow_glass_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.headlight_glass_02.geometry} material={nodes.headlight_glass_02.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.rearlights_03.geometry} material={nodes.rearlights_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.headlight_glass_03.geometry} material={nodes.headlight_glass_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red19.geometry} material={nodes.car_paint_red19.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.rearlights_02.geometry} material={nodes.rearlights_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rearlights_01.geometry} material={nodes.rearlights_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.glass_white_foggy_00.geometry} material={nodes.glass_white_foggy_00.material} >
        <Glass />
      </mesh>
      <mesh geometry={nodes.headlight_glass_00.geometry} material={nodes.headlight_glass_00.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.glass_white_foggy_01.geometry} material={nodes.glass_white_foggy_01.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.headlight_glass_01.geometry} material={nodes.headlight_glass_01.material}>
        <Glass />
      </mesh>
      <mesh geometry={nodes.yellow_glass_00.geometry} material={nodes.yellow_glass_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rearlights_00.geometry} material={nodes.rearlights_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red18.geometry} material={nodes.car_paint_red18.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.chrome_brushed_04.geometry} material={nodes.chrome_brushed_04.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_plastic_matte_17.geometry} material={nodes.black_plastic_matte_17.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.black_paint_07.geometry} material={materials.wire_141007058}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.red_paint_01.geometry} material={nodes.red_paint_01.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.metal_worn_08.geometry} material={materials.wire_224086086}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.matte_red_03.geometry} material={nodes.matte_red_03.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.matte_black_29.geometry} material={nodes.matte_black_29.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.blue_paint_engine_00.geometry} material={nodes.blue_paint_engine_00.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.gray_metal_17.geometry} material={nodes.gray_metal_17.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.matte_black_28.geometry} material={nodes.matte_black_28.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.gray_metal_16.geometry} material={nodes.gray_metal_16.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.matte_black_27.geometry} material={nodes.matte_black_27.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.metal_worn_07.geometry} material={nodes.metal_worn_07.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.metal_brushed_33.geometry} material={nodes.metal_brushed_33.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.matte_black_26.geometry} material={nodes.matte_black_26.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_25.geometry} material={nodes.matte_black_25.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_24.geometry} material={nodes.matte_black_24.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_red_02.geometry} material={nodes.matte_red_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_metal_01.geometry} material={nodes.brown_metal_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_15.geometry} material={nodes.gray_metal_15.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_24.geometry} material={nodes.white_main_24.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_23.geometry} material={nodes.matte_black_23.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_22.geometry} material={nodes.matte_black_22.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_32.geometry} material={nodes.metal_brushed_32.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_23.geometry} material={nodes.white_main_23.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_31.geometry} material={nodes.metal_brushed_31.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_30.geometry} material={nodes.metal_brushed_30.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_metal_00.geometry} material={nodes.brown_metal_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_29.geometry} material={nodes.metal_brushed_29.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_28.geometry} material={nodes.metal_brushed_28.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.red_paint_00.geometry} material={nodes.red_paint_00.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.metal_brushed_27.geometry} material={nodes.metal_brushed_27.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_paint_06.geometry} material={nodes.black_paint_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_worn_06.geometry} material={nodes.metal_worn_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_22.geometry} material={nodes.white_main_22.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.metal_brushed_26.geometry} material={nodes.metal_brushed_26.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.matte_black_21.geometry} material={nodes.matte_black_21.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_14.geometry} material={nodes.gray_metal_14.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_20.geometry} material={nodes.matte_black_20.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_21.geometry} material={nodes.white_main_21.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_paint_05.geometry} material={nodes.black_paint_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_engine_08.geometry} material={nodes.chrome_engine_08.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.gray_metal_13.geometry} material={nodes.gray_metal_13.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gold_metal_02.geometry} material={nodes.gold_metal_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_25.geometry} material={nodes.metal_brushed_25.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_24.geometry} material={nodes.metal_brushed_24.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_23.geometry} material={nodes.metal_brushed_23.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_red_01.geometry} material={nodes.matte_red_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_engine_07.geometry} material={nodes.chrome_engine_07.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.deep_black_engine_00.geometry} material={nodes.deep_black_engine_00.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.matte_black_19.geometry} material={nodes.matte_black_19.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_22.geometry} material={nodes.metal_brushed_22.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_paint_00.geometry} material={nodes.gray_paint_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_10.geometry} material={nodes.brown_worn_metal_10.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_21.geometry} material={nodes.metal_brushed_21.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_20.geometry} material={nodes.metal_brushed_20.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_19.geometry} material={nodes.metal_brushed_19.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_18.geometry} material={nodes.matte_black_18.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_18.geometry} material={nodes.metal_brushed_18.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_12.geometry} material={nodes.gray_metal_12.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_17.geometry} material={nodes.matte_black_17.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_paint_04.geometry} material={nodes.black_paint_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_paint_03.geometry} material={nodes.black_paint_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_20.geometry} material={nodes.white_main_20.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_17.geometry} material={nodes.metal_brushed_17.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_16.geometry} material={nodes.metal_brushed_16.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_16.geometry} material={nodes.matte_black_16.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_paint_02.geometry} material={nodes.black_paint_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_15.geometry} material={nodes.metal_brushed_15.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_15.geometry} material={nodes.matte_black_15.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_paint_01.geometry} material={nodes.black_paint_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_worn_05.geometry} material={nodes.metal_worn_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.black_paint_00.geometry} material={nodes.black_paint_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_cable_00.geometry} material={nodes.white_cable_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_worn_04.geometry} material={nodes.metal_worn_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_engine_06.geometry} material={nodes.chrome_engine_06.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.metal_brushed_14.geometry} material={nodes.metal_brushed_14.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_14.geometry} material={nodes.matte_black_14.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_engine_05.geometry} material={nodes.chrome_engine_05.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.white_main_19.geometry} material={nodes.white_main_19.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_13.geometry} material={nodes.metal_brushed_13.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_18.geometry} material={nodes.white_main_18.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_11.geometry} material={nodes.gray_metal_11.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_13.geometry} material={nodes.matte_black_13.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_metal_light_01.geometry} material={nodes.brown_metal_light_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_17.geometry} material={nodes.white_main_17.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_16.geometry} material={nodes.white_main_16.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_15.geometry} material={nodes.white_main_15.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_worn_03.geometry} material={nodes.metal_worn_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_12.geometry} material={nodes.matte_black_12.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_10.geometry} material={nodes.gray_metal_10.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_14.geometry} material={nodes.white_main_14.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_09.geometry} material={nodes.gray_metal_09.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_13.geometry} material={nodes.white_main_13.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_12.geometry} material={nodes.metal_brushed_12.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_09.geometry} material={nodes.brown_worn_metal_09.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_11.geometry} material={nodes.matte_black_11.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_08.geometry} material={nodes.gray_metal_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_08.geometry} material={nodes.brown_worn_metal_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_07.geometry} material={nodes.brown_worn_metal_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_06.geometry} material={nodes.brown_worn_metal_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_10.geometry} material={nodes.matte_black_10.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_engine_04.geometry} material={nodes.chrome_engine_04.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.chrome_engine_03.geometry} material={nodes.chrome_engine_03.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.white_main_12.geometry} material={nodes.white_main_12.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_engine_02.geometry} material={nodes.chrome_engine_02.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.matte_black_09.geometry} material={nodes.matte_black_09.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.blue_cable_00.geometry} material={nodes.blue_cable_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_11.geometry} material={nodes.white_main_11.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_10.geometry} material={nodes.white_main_10.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_07.geometry} material={nodes.gray_metal_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_06.geometry} material={nodes.gray_metal_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_05.geometry} material={nodes.gray_metal_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_04.geometry} material={nodes.gray_metal_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_03.geometry} material={nodes.gray_metal_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_red_00.geometry} material={nodes.matte_red_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_05.geometry} material={nodes.brown_worn_metal_05.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.matte_black_08.geometry} material={nodes.matte_black_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_02.geometry} material={nodes.gray_metal_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_04.geometry} material={nodes.brown_worn_metal_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_03.geometry} material={nodes.brown_worn_metal_03.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_02.geometry} material={nodes.brown_worn_metal_02.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.white_main_09.geometry} material={nodes.white_main_09.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_01.geometry} material={nodes.brown_worn_metal_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_08.geometry} material={nodes.white_main_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_07.geometry} material={nodes.matte_black_07.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.metal_worn_02.geometry} material={nodes.metal_worn_02.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.gray_metal_01.geometry} material={nodes.gray_metal_01.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.brown_metal_light_00.geometry} material={nodes.brown_metal_light_00.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.white_main_07.geometry} material={nodes.white_main_07.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.matte_black_06.geometry} material={nodes.matte_black_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gold_metal_01.geometry} material={nodes.gold_metal_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_11.geometry} material={nodes.metal_brushed_11.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_05.geometry} material={nodes.matte_black_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gold_metal_00.geometry} material={nodes.gold_metal_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_06.geometry} material={nodes.white_main_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_10.geometry} material={nodes.metal_brushed_10.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_04.geometry} material={nodes.matte_black_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_09.geometry} material={nodes.metal_brushed_09.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_engine_01.geometry} material={nodes.chrome_engine_01.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.matte_black_03.geometry} material={nodes.matte_black_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_05.geometry} material={nodes.white_main_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_04.geometry} material={nodes.white_main_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.brown_worn_metal_00.geometry} material={nodes.brown_worn_metal_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_02.geometry} material={nodes.matte_black_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_03.geometry} material={nodes.white_main_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.gray_metal_00.geometry} material={nodes.gray_metal_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_08.geometry} material={nodes.metal_brushed_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_02.geometry} material={nodes.white_main_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_worn_01.geometry} material={nodes.metal_worn_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.chrome_engine_00.geometry} material={nodes.chrome_engine_00.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.metal_brushed_07.geometry} material={nodes.metal_brushed_07.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_06.geometry} material={nodes.metal_brushed_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.red_cable_00.geometry} material={nodes.red_cable_00.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.metal_brushed_05.geometry} material={nodes.metal_brushed_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_04.geometry} material={nodes.metal_brushed_04.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_03.geometry} material={nodes.metal_brushed_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_01.geometry} material={nodes.matte_black_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_02.geometry} material={nodes.metal_brushed_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_01.geometry} material={nodes.white_main_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.white_main_00.geometry} material={nodes.white_main_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_01.geometry} material={nodes.metal_brushed_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.matte_black_00.geometry} material={nodes.matte_black_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_brushed_00.geometry} material={nodes.metal_brushed_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.metal_worn_00.geometry} material={nodes.metal_worn_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.tire_base_03.geometry} material={nodes.tire_base_03.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.tire_base_00.geometry} material={nodes.tire_base_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.tire_base_02.geometry} material={nodes.tire_base_02.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rubber_01.geometry} material={nodes.rubber_01.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rubber_05.geometry} material={nodes.rubber_05.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rims_19.geometry} material={nodes.rims_19.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rubber_06.geometry} material={nodes.rubber_06.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red08.geometry} material={nodes.car_paint_red08.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.rims_09.geometry} material={nodes.rims_09.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_00.geometry} material={nodes.dark_gray_metal_00.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rim_paint_black_02.geometry} material={nodes.rim_paint_black_02.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.car_paint_red00.geometry} material={nodes.car_paint_red00.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.car_paint_red07.geometry} material={nodes.car_paint_red07.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.rims_08.geometry} material={nodes.rims_08.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_13.geometry} material={nodes.dark_gray_metal_13.material}>
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rims_bolts_04.geometry} material={nodes.rims_bolts_04.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_08.geometry} material={nodes.dark_gray_metal_08.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rims_05.geometry} material={nodes.rims_05.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_07.geometry} material={nodes.dark_gray_metal_07.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rim_paint_black_03.geometry} material={nodes.rim_paint_black_03.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_10.geometry} material={nodes.rims_10.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rims_11.geometry} material={nodes.rims_11.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rubber_04.geometry} material={nodes.rubber_04.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rubber_03.geometry} material={nodes.rubber_03.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rims_17.geometry} material={nodes.rims_17.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_15.geometry} material={nodes.dark_gray_metal_15.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.tire_base_01.geometry} material={nodes.tire_base_01.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.car_paint_red05.geometry} material={nodes.car_paint_red05.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.rims_18.geometry} material={nodes.rims_18.material} >
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_bolts_06.geometry} material={nodes.rims_bolts_06.material} >
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_16.geometry} material={nodes.rims_16.material} >
        <Rims />
      </mesh>
      <mesh geometry={nodes.rim_paint_black_07.geometry} material={nodes.rim_paint_black_07.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_02.geometry} material={nodes.dark_gray_metal_02.material} >
        <Rims />
      </mesh>
      <mesh geometry={nodes.car_paint_red02.geometry} material={nodes.car_paint_red02.material}  >
        <Rims />
      </mesh>
      <mesh geometry={nodes.tire_base_05.geometry} material={nodes.tire_base_05.material} >
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_07.geometry} material={nodes.rims_07.material} >
        <Rims />
      </mesh>
      <mesh geometry={nodes.rim_paint_black_05.geometry} material={nodes.rim_paint_black_05.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.car_paint_red09.geometry} material={nodes.car_paint_red09.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rubber_08.geometry} material={nodes.rubber_08.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_12.geometry} material={nodes.dark_gray_metal_12.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_11.geometry} material={nodes.dark_gray_metal_11.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.tire_base_04.geometry} material={nodes.tire_base_04.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.tire_base_08.geometry} material={nodes.tire_base_08.material} >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rims_00.geometry} material={nodes.rims_00.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.car_paint_red04.geometry} material={nodes.car_paint_red04.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.rim_paint_black_00.geometry} material={nodes.rim_paint_black_00.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_02.geometry} material={nodes.rims_02.material}  >
        <CarbonFibre />
      </mesh>
      <mesh geometry={nodes.rims_03.geometry} material={nodes.rims_03.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.car_paint_red10.geometry} material={nodes.car_paint_red10.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.car_paint_red03.geometry} material={nodes.car_paint_red03.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_03.geometry} material={nodes.dark_gray_metal_03.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_05.geometry} material={nodes.dark_gray_metal_05.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_06.geometry} material={nodes.dark_gray_metal_06.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_bolts_02.geometry} material={nodes.rims_bolts_02.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_04.geometry} material={nodes.dark_gray_metal_04.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_01.geometry} material={nodes.rims_01.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.tire_base_06.geometry} material={nodes.tire_base_06.material}/>
      <mesh geometry={nodes.rims_04.geometry} material={nodes.rims_04.material} >
        <Rims />
      </mesh>
      <mesh geometry={nodes.rubber_02.geometry} material={nodes.rubber_02.material} />
      <mesh geometry={nodes.tire_base_07.geometry} material={nodes.tire_base_07.material} />
      <mesh geometry={nodes.rim_paint_black_01.geometry} material={nodes.rim_paint_black_01.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.car_paint_red06.geometry} material={nodes.car_paint_red06.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_01.geometry} material={nodes.dark_gray_metal_01.material} />
      <mesh geometry={nodes.car_paint_red01.geometry} material={nodes.car_paint_red01.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.car_paint_red11.geometry} material={nodes.car_paint_red11.material}>
        <CarPaint />
      </mesh>
      <mesh geometry={nodes.rubber_07.geometry} material={nodes.rubber_07.material} />
      <mesh geometry={nodes.rims_13.geometry} material={nodes.rims_13.material} >
        <Rims />
      </mesh>
      <mesh geometry={nodes.tire_base_10.geometry} material={nodes.tire_base_10.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_bolts_05.geometry} material={nodes.rims_bolts_05.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_14.geometry} material={nodes.rims_14.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.dark_gray_metal_14.geometry} material={nodes.dark_gray_metal_14.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rim_paint_black_04.geometry} material={nodes.rim_paint_black_04.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.tire_base_09.geometry} material={nodes.tire_base_09.material} />
      <mesh geometry={nodes.dark_gray_metal_09.geometry} material={nodes.dark_gray_metal_09.material} />
      <mesh geometry={nodes.rim_paint_black_06.geometry} material={nodes.rim_paint_black_06.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_06.geometry} material={nodes.rims_06.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_15.geometry} material={nodes.rims_15.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.rims_12.geometry} material={nodes.rims_12.material}>
        <Rims />
      </mesh>
      <mesh geometry={nodes.tire_base_11.geometry} material={nodes.tire_base_11.material} />
      <mesh geometry={nodes.dark_gray_metal_10.geometry} material={nodes.dark_gray_metal_10.material}>
        <Rims />
      </mesh>
    </group>
    </mesh>
  )
}

useGLTF.preload('/f40.gltf')
