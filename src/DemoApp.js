import React, { Component } from 'react';
//import * as THREE from 'three';
//import orbControls from './OrbitControls';
//import Stats from 'stats.js';
import {DnDContainer, DnDLayout} from 'dnd-box'
//import OrbitControls from './OrbitControls';
//import RotationMenu from './RotationMenu'
//import SelectedObjInfo from './SelectedObjInfo'

class DemoApp extends Component{
    constructor(props) {
        super(props)
        this.state={
            //mainCanvasRef:null,

            frontViewSize:{
                w:null,
                h:null
            },
            sideViewSize:{
                w:null,
                h:null
            },
            topViewSize:{
                w:null,
                h:null
            },
            rotationMesh1:{
                x:0.01,
                y:0,
                z:0
            },
            rotationMesh2:{
                x:0,
                y:0.01,
                z:0
            },
            selectedObjInfo:{
                name:null,
                type:null,
                position:null,
                scale:null
            },
            showContainer:null,
        }
    }

    componentDidMount(){     
      

    }

    componentDidUpdate(preProps, preState){
       
    }

    componentWillUnmount() {
    }

 

    // animate=()=>{

    //     this.stats.begin();
    //     this.renderer.render(this.scene, this.camera1)
    //     this.renderer2.render(this.scene, this.camera2)
    //     this.renderer3.render(this.scene, this.camera3)
    //     this.renderer4.render(this.scene, this.camera4)
    //     this.mesh1.rotation.x += this.state.rotationMesh1.x
    //     this.mesh1.rotation.y += this.state.rotationMesh1.y
    //     this.mesh1.rotation.z += this.state.rotationMesh1.z
    //     this.mesh2.rotation.x += this.state.rotationMesh2.x
    //     this.mesh2.rotation.y += this.state.rotationMesh2.y
    //     this.mesh2.rotation.z += this.state.rotationMesh2.z
    //     this.stats.end();
    //     window.requestAnimationFrame(this.animate)
    // }

    

    showContainerClick=()=>{
        this.setState({
            showContainer:[1,2,3,4,5]
        },()=>{
            this.setState({
                showContainer:null
            })
        })
    }

    // threeDLayerMouseDown=(e)=>{
    //     //e.preventDefault()
    //     //e.stopPropagation()
    //     let result = this.detectObjectSelectedOrNot(e)
    //     if(result && this.state.selectedObjInfo.name === result.name)
    //     {
    //         if(result.name === "plain1")
    //         {
    //             this.selectedObjectPaintedOrNot(this.mesh1,false)                
    //         }
            
    //     }
    //     else if(result && this.state.selectedObjInfo.name !== result.name)
    //     {
    //         if(result.name === "plain1")
    //         {
    //             this.selectedObjectPaintedOrNot(this.mesh1,true) 
    //             this.selectedObjectPaintedOrNot(this.mesh2,false)
    //         }
    //         else
    //         {
    //             this.selectedObjectPaintedOrNot(this.mesh1,false) 
    //             this.selectedObjectPaintedOrNot(this.mesh2,true)
    //         }

    //         let obj = {
    //             name:result.name,
    //             type:result.type,
    //             position:{
    //                 x:result.position.x,
    //                 y:result.position.y,
    //                 z:result.position.z
    //             },
    //             scale:{
    //                 width:result.geometry.parameters.width,
    //                 height:result.geometry.parameters.height,
    //                 depth:result.geometry.parameters.depth?result.geometry.parameters.depth:0
    //             }
    //         }
            
    //         this.setState({
    //             selectedObjInfo:obj
    //         })         
    //     }
    //     else
    //     {
    //         let obj = {
    //             name:null,
    //             type:null,
    //             position:null,
    //             scale:null
    //         }

    //         this.selectedObjectPaintedOrNot(this.mesh1,false) 
    //         this.selectedObjectPaintedOrNot(this.mesh2,false)

    //         this.setState({
    //             selectedObjInfo:obj
    //         })
    //     }
    //     console.log(result)
    // }

    // detectObjectSelectedOrNot=(e)=>{
    //     const rayCaster = new THREE.Raycaster()
    //     const mouseToken = new THREE.Vector2()

    //     if(this.state.mainCanvasRef)
    //     {            
    //         let rect = this.state.mainCanvasRef.getBoundingClientRect()
    //         mouseToken.x = ((e.clientX-rect.left)/this.state.mainCanvasRef.clientWidth)*2-1
    //         mouseToken.y = -((e.clientY-rect.top)/this.state.mainCanvasRef.clientHeight)*2+1
    //         rayCaster.setFromCamera(mouseToken, this.camera1)
    
    //         let intersects = rayCaster.intersectObjects(this.scene.children)
        
    //         if(intersects.length>0)
    //         {
    //             for(var i=0; i <intersects.length; i++)
    //             {
    //                 if(intersects[i].object.type === 'Mesh')
    //                 {
    //                     return intersects[i].object
    //                 }   
    //             }
    //         }
    //         else
    //         {
    //             return null
    //         }
    //     }
    // }

    // selectedObjectPaintedOrNot(object3D,toggle)
    // {
    //     if(toggle)
    //     {
    //         object3D.material.color.set(0x13D73F)
    //     }
    //     else
    //     {
    //         object3D.material.color.set(0x0000ff)
    //     }
    // }

    

    // getBoxesState=(msg)=>{
    //     if(this.frontView)
    //     {
    //         this.resizeFrontView()
    //     }
    // }

    // returnRotation=(msg)=>{
    //     switch(msg.ID){
    //         case 1 :
    //             if(this.state.rotationMesh1 !== msg.values)
    //             {
    //                 this.setState({
    //                     rotationMesh1:msg.values
    //                 })
    //             }
    //             break
    //         case 2 :
    //             if(this.state.rotationMesh2 !== msg.values)
    //             {
    //                 this.setState({
    //                     rotationMesh2:msg.values
    //                 })
    //             }
    //             break
    //         default:
    //             break
    //     }
    // }

    render(){
       
        console.log("DemoApp render")
        //console.log(this.state.mainCanvasRef)
        let boxesSetting=[
            {
                boxID:'A',
                width:200,
                height:200,
                x:0,
                y:100
            },
            {
                boxID:'B',
                width:200,
                height:200,
                x:200,
                y:100
            },
            {
                boxID:'C',
                width:200,
                height:200,
                x:400,
                y:100
            },
            {
                boxID:'D',
                width:200,
                height:200,
                x:600,
                y:100
            },
            {
                boxID:'E',
                width:200,
                height:200,
                x:800,
                y:100
            }
        ]

        return(
            <div ref={(mainBody)=>{this.mainBody = mainBody}} style={{width:'100%',height:'100%',borderTop:"1px solid black", borderBottom:"1px solid black"}}  >
                <div style={{width:1000,height:50,left:100,position:'absolute',padding:10}}>
                    <div style={{width:350, lineHeight:'50px', float:'right'}}>{"1"}</div>
                </div>
                <DnDLayout backgroundColor={'pink'} width={1920} height={800} boxColor={''} boxHeaderColor={''} boxTabColor={''} boxHeaderHoverColor={''} boxTabHoverColor={''} boxTabSelectedColor={''} iconHoverColor={''} boxTabRadius={'0px 10px 0px 0px'} boxesSetting={boxesSetting}  tabHeight={25} getBoxesState={this.getBoxesState}>
                   
                    <DnDContainer containerTabTitle={"Front View"} containerID={1} boxID={'A'}>
                        <div style={{width:'100%',height:'100%',overflow:'hidden'}} >
                        </div>
                    </DnDContainer>
                    <DnDContainer containerTabTitle={"Side View"} containerID={2} boxID={'B'}>
                        <div style={{width:'100%',height:'100%',overflow:'hidden'}} >                                 
                        </div>
                    </DnDContainer>
                    <DnDContainer containerTabTitle={"Top View"} containerID={3} boxID={'C'}>
                        <div style={{width:'100%',height:'100%',overflow:'hidden'}} >                                 
                        </div>
                    </DnDContainer>
                    <DnDContainer containerTabTitle={"Rotation Speed"} containerID={4} boxID={'D'}>             
                             
                    </DnDContainer>
                    <DnDContainer containerTabTitle={"Obj Info"} containerID={5} boxID={'D'}>
                      
                    </DnDContainer>        
                </DnDLayout>
            </div>
        )
    }
}
export default DemoApp