import React from "react";
import { Col, Card, CardBody, CardHeader, Row, Media, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import { Slack, TrendingUp, Zap } from "react-feather";
import './Db.css';
import './DomCssTable.css';
import Light from "../../assets/img/photos/light.png";
import PH from "../../assets/img/photos/p.png";
import Humidity from "../../assets/img/photos/h.png";
import Moil from "../../assets/img/photos/sm.png";
import Temperature from "../../assets/img/photos/temperature.png";

import { Droplet, Thermometer, Activity, Square, AlertTriangle } from "react-feather";
class Statistics extends React.Component {
  ConvertHum(data) {
    if (data >= this.props.info.stage.min_hum && data < this.props.info.stage.max_hum) {
      return "medium_sensor float-right d-inline";
    }
    else if (data < this.props.info.stage.min_hum) {
      return "low_sensor float-right d-inline";
    }
    else {
      return "high_sensor float-right d-inline";
    }
  }
  
  ConvertPH(data) {

    if (data >= this.props.info.stage.min_PH && data < this.props.info.stage.max_PH) {

      return "medium_sensor float-right";
    }
    else if (data < this.props.info.stage.min_PH) {
      return "low_sensor float-right";
    }
    else {
      return "high_sensor float-right";
    }
  }

  ConvertL(data) {
    if (data >= this.props.info.stage.min_light && data < this.props.info.stage.max_light) {

      return "medium_sensor float-right";
    }
    else if (data < this.props.info.stage.max_light) {
      return "low_sensor float-right";
    }
    else {
      return "high_sensor float-right";
    }
  }

  ConvertT(data) {

    if (data >= this.props.info.stage.min_temp && data < this.props.info.stage.max_temp) {

      return "medium_sensor float-right";
    }
    else if (data < this.props.info.stage.min_temp) {
      return "low_sensor float-right";
    }
    else {
      return "high_sensor float-right";
    }
  }

  ConvertSM(data) {

    if (data >= this.props.info.stage.min_soil_moisture && data < this.props.info.stage.max_soil_moisture) {

      return "medium_sensor float-right";
    }
    else if (data < this.props.info.stage.min_soil_moisture) {
      return "low_sensor float-right";
    }
    else {
      return "high_sensor float-right ";
    }
  }

  ConvertStatus(data) {
    console.log(data);
    
    if (data === "RẤT TỐT") {
      return "text-success d-inline";
    }
    else if (data === "TỐT") {
      return "text-success d-inline";
    }
    else if (data === "YẾU") {
      return "text-ư d-inline";
    }
    else if (data === "RẤT YẾU") {
      return "text-success d-inline";
    }
  }

  render() {
    const { L1, L2, PH1, PH2, T1, T2, H1, H2, SM1, SM2, SM3, SM4, SM5, SM6, SM7, SM8, SM9, SM10, SM11, SM12, SM13, SM14, SM15, SM16, SM17, SM18, SM19, SM20} = this.props.data;
    let SM = [SM1, SM2, SM3, SM4, SM5, SM6, SM7, SM8, SM9, SM10, SM11, SM12, SM13, SM14, SM15, SM16, SM17, SM18, SM19, SM20]
    console.log(this.props.data);

    return (
      <div className="w-100">
         <Row>
          <Col>
            <Card className="flex-fill ">
              <CardHeader className=" border border-primary px-2 !important">
              <h3 className="text-center mr-3 font-weight-bold">Trạng thái cảm biến</h3>
              <Row>
                  <Col xs='1'>
                      <div className='warning__statistic' style={{"background-color":"red"}}></div>
                  </Col>
                  <Col xs='3'>
                      <h3 className='mt-2 font-weight-bold'>
                          Cao
                      </h3>
                  </Col>
                  <Col xs='1'>
                      <div className='warning__statistic bg-success'></div>
                  </Col>
                  <Col xs='3'>
                      <h3 className='mt-2 font-weight-bold'>
                          Trung bình
                      </h3>
                  </Col>
                  <Col xs='1'>
                      <div className='warning__statistic'  style={{"background-color":"orange"}}></div>
                  </Col>
                  <Col xs='3'>
                      <h3 className='mt-2 font-weight-bold'>
                          Thấp
                      </h3>
                  </Col>
              </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="3">
            <Card className="flex-fill">
              <CardHeader className=" border border-primary px-2 !important">
                <div className="float-right">
                  <img src={Light} width={50} height={50} />
                </div>
                <h4 className="card-title mb-0 font-weight-bolder text__head--item">Ánh sáng</h4>
                <div className="badge badge-primary text-center ml-2">Lux</div>
              </CardHeader>
              <CardBody className=" border border-primary">
                <Media>
                  <div className="d-inline-block mr-1">
                    <h4 className="font-weight-light ">
                      <TrendingUp className="feather-md text-primary mb-1 mr-1" color={L1.value === null  ? "#7c7c80" : "green"} id="L1"/>
                      L1
                    </h4>
                  </div>
                  <Media body>
                    <UncontrolledPopover placement="left" target="L1" trigger="hover" style={{width:"150px"}}>
                      <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                      <PopoverBody>
                        Tín hiệu truyền:<h7 className={this.ConvertStatus(L1.RF_signal)}> {L1.RF_signal === null ? null : L1.RF_signal}</h7><br/>
                        Dung lượng pin:<h7 className="text-success d-inline"> {L1.battery === null ? null : L1.battery + "%"} </h7>
                      </PopoverBody>
                    </UncontrolledPopover>
                    <h4 className={this.ConvertL(L1.value)}>{L1.value}</h4>
                  </Media>
                </Media>
                <Media>
                  <div className="d-inline-block mr-1">
                    <h4 className="font-weight-light ">
                      <TrendingUp className="feather-md text-primary mb-1 mr-1" color={L2.value === null ? "#7c7c80" : "green"} id="L2"/>
                      L2
                    </h4>
                  </div>
                  <Media body>
                    <UncontrolledPopover placement="left" target="L2" trigger="hover" style={{width:"150px"}}>
                      <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                      <PopoverBody>
                        Tín hiệu truyền:<h7 className={this.ConvertStatus(L2.RF_signal)}> {L1.RF_signal === null ? null : L2.RF_signal}</h7><br/>
                        Dung lượng pin:<h7 className="text-success d-inline"> {L2.battery === null ? null : L2.battery + "%"} </h7>
                      </PopoverBody>
                    </UncontrolledPopover>
                    <h4 className={this.ConvertL(L2.value)} >{L2.value}</h4>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card className="flex-fill">
              <CardHeader className="border border-primary px-2 !important">
                <div className="float-right">
                  <img src={PH} width={50} height={50} />
                </div>
                <h4 className="card-title mb-0 font-weight-bolder text__head--item">PH</h4>
              </CardHeader>
              <CardBody className="border border-primary" >
                <Media>
                  <div className="d-inline-block mr-1">
                    <h4 className="font-weight-light ">
                      <Slack className="feather-md mb-1 mr-1" color={PH1.value === null ? "#7c7c80" : "green"} id="PH1"/>PH 1
                    </h4>
                  </div>
                  <Media body>
                    <UncontrolledPopover placement="left" target="PH1" trigger="hover" style={{width:"150px"}}>
                      <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                      <PopoverBody>
                        Tín hiệu truyền:<h7 className={this.ConvertStatus(PH1.RF_signal)}> {L1.RF_signal === null ? null : PH1.RF_signal}</h7><br/>
                        Dung lượng pin:<h7 className="text-success d-inline"> {PH1.battery === null ? null : PH1.battery + "%"} </h7>
                      </PopoverBody>
                    </UncontrolledPopover>
                    <h4 className={this.ConvertPH(PH1.value)}>{PH1.value }</h4>
                  </Media>
                </Media>
                <Media>
                  <Media className="d-inline-block mr-1">
                    <h4 className="font-weight-light ">
                      <Slack className="feather-md mb-1 mr-1" color={PH2.value === null ? "#7c7c80" : "green"} id="PH2"/>PH 2
                    </h4>
                  </Media>
                  <Media body>
                    <UncontrolledPopover placement="left" target="PH2" trigger="hover" style={{width:"150px"}}>
                      <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                      <PopoverBody>
                        Tín hiệu truyền:<h7 className={this.ConvertStatus(PH2.RF_signal)}> {L1.RF_signal === null ? null : PH2.RF_signal}</h7><br/>
                        Dung lượng pin:<h7 className="text-success d-inline"> {PH2.battery === null ? null : PH2.battery + "%"} </h7>
                      </PopoverBody>
                    </UncontrolledPopover>
                    <h4 className={this.ConvertPH(PH2.value)}>{PH2.value}</h4>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card className="flex-fill ">
              <CardHeader className="border border-primary px-2 !important">
                <div className="float-right">
                  <img src={Temperature} width={50} height={50} />
                </div>
                <h4 className="card-title mb-0 font-weight-bolder text__head--item">Nhiệt độ</h4>
                <div className="badge badge-primary text-center ml-2">℃</div>
              </CardHeader>
              <CardBody className="border border-primary">
                <Media>
                  <div className="d-inline-block mr-1">
                    <h4 className="font-weight-light ">
                      <Slack className="feather-md mb-1 mr-1" color={T1.value === null ? "#7c7c80" : "green"} id="T1"/>
                      T1
                    </h4>
                  </div>
                  <Media body>
                    <UncontrolledPopover placement="left" target="T1" trigger="hover" style={{width:"150px"}}>
                      <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                      <PopoverBody>
                        Tín hiệu truyền:<h7 className={this.ConvertStatus(T1.RF_signal)}> {T1.RF_signal === null ? null : T1.RF_signal}</h7><br/>
                        Dung lượng pin:<h7 className="text-success d-inline"> {T1.battery === null ? null : T1.battery + "%"} </h7>
                      </PopoverBody>
                    </UncontrolledPopover>
                    <h4 className={this.ConvertT(T1.value)}>{T1.value}</h4>
                  </Media>
                </Media>
                <Media>
                  <div className="d-inline-block mr-1">
                    <h4 className="font-weight-light ">
                      <Slack className="feather-md mb-1 mr-1" color={T2.value === null ? "#7c7c80" : "green"} id="T2"/>
                      T2
                    </h4>
                  </div>
                  <Media body>
                    <UncontrolledPopover placement="left" target="T2" trigger="hover" style={{width:"150px"}}>
                      <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                      <PopoverBody>
                        Tín hiệu truyền:<h7 className={this.ConvertStatus(T2.RF_signal)}> {T2.RF_signal === null ? null : T2.RF_signal}</h7><br/>
                        Dung lượng pin:<h7 className="text-success d-inline"> {T2.battery === null ? null : T2.battery + "%"} </h7>
                      </PopoverBody>
                    </UncontrolledPopover>
                    <h4 className={this.ConvertT(T2.value)}>{T2.value}</h4>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card className="flex-fill card--border">
              <CardHeader className="border border-primary px-2 !important">
                <div className="float-right">
                  <img src={Humidity} width={50} height={50} />
                </div>
                <h4 className="card-title mb-0 font-weight-bolder text__head--item">Độ ẩm</h4>
                <div className="badge badge-success ml-4">%</div>
              </CardHeader>
              <CardBody className="border border-primary">
                <Media>
                  <div className="d-inline-block mr-1">
                    <h4 className="font-weight-light 1">
                      <Zap className="feather-md text-primary mb-1 mr-1" color={H1.value === null ? "#7c7c80" : "green"} id="HZ"/>
                      H1
                    </h4>
                  </div>
                  <Media body>
                    <UncontrolledPopover placement="left" target="HZ" trigger="hover" style={{width:"150px"}}>
                      <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                      <PopoverBody>
                        Tín hiệu truyền:<h7 className={this.ConvertStatus(H1.RF_signal)}> {H1.RF_signal === null ? null : H1.RF_signal}</h7><br/>
                        Dung lượng pin:<h7 className="text-success d-inline"> {H1.battery === null ? null : H1.battery + "%"} </h7>
                      </PopoverBody>
                    </UncontrolledPopover>
                    <h4 className={this.ConvertHum(H1.value)}>{H1.value}</h4>
                  </Media>
                </Media>
                <Media>
                  <div className="d-inline-block mr-1">
                    <h4 className="font-weight-light 1">
                      <Zap className="feather-md text-primary mb-1 mr-1" color={H2.value === null ? "#7c7c80" : "green"} id="H2"/>
                        H2
                    </h4>
                  </div>
                  <Media body>
                    <UncontrolledPopover placement="left" target="H2" trigger="hover" style={{width:"150px"}}>
                      <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                      <PopoverBody>
                        Tín hiệu truyền:<h7 className={this.ConvertStatus(H2.RF_signal)}> {H2.RF_signal === null ? null : H2.RF_signal}</h7><br/>
                        Dung lượng pin:<h7 className="text-success d-inline"> {H2.battery === null ? null : H2.battery + "%"} </h7>
                      </PopoverBody>
                    </UncontrolledPopover>
                    <h4 className={this.ConvertHum(H2.value)}>{H2.value}</h4>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
        </Row>


        
        <Row>
          <Col>
            <Card className="flex-fill ">
              <CardHeader className=" border border-primary px-2 !important">
                <div className="float-right">
                  <img src={Moil} width={50} height={50} />
                </div>
                <h4 className="card-title mb-0 font-weight-bolder text__head--item">Độ ẩm đất</h4>
                <div className="badge badge-success ml-4">%</div>
              </CardHeader>
              <CardBody className=" border border-primary">
               <Row>
                 <Col xs="6" sm="6" md="3">
                  <Media>              
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM1.value === null ? "#7c7c80" : "green"}  id="SM1" />
                          SM1
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM1" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM1.RF_signal)}> {SM1.RF_signal === null ? null : SM1.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM1.battery === null ? null : SM1.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM1.value)}>{SM1.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM2.value === null ? "#7c7c80" : "green"} id="SM2" />
                          SM2
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM2" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM2.RF_signal)}> {SM1.RF_signal === null ? null : SM2.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM2.battery === null ? null : SM2.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM2.value)}>{SM2.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM3.value === null ? "#7c7c80" : "green"} id="SM3"/>
                          SM3
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM3" trigger="hover" style={{width:"150px"}}>
                          <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                          <PopoverBody>
                            Tín hiệu truyền:<h7 className={this.ConvertStatus(SM3.RF_signal)}> {SM3.RF_signal === null ? null : SM3.RF_signal}</h7><br/>
                            Dung lượng pin:<h7 className="text-success d-inline"> {SM3.battery === null ? null : SM3.battery + "%"} </h7>
                          </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM3.value)}>{SM3.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM4.value === null ? "#7c7c80" : "green"} id="SM4"/>
                          SM4
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM4" trigger="hover" style={{width:"150px"}}>
                          <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                          <PopoverBody>
                            Tín hiệu truyền:<h7 className={this.ConvertStatus(SM4.RF_signal)}> {SM4.RF_signal === null ? null : SM4.RF_signal}</h7><br/>
                            Dung lượng pin:<h7 className="text-success d-inline"> {SM4.battery === null ? null : SM4.battery + "%"} </h7>
                          </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM4.value)}>{SM4.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM5.value === null ? "#7c7c80" : "green"} id="SM5"/>
                          SM5
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM5" trigger="hover" style={{width:"150px"}}>
                          <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                          <PopoverBody>
                            Tín hiệu truyền:<h7 className={this.ConvertStatus(SM5.RF_signal)}> {SM5.RF_signal === null ? null : SM5.RF_signal}</h7><br/>
                            Dung lượng pin:<h7 className="text-success d-inline"> {SM5.battery === null ? null : SM5.battery + "%"} </h7>
                          </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM5.value)}>{SM5.value}</h4>
                    </Media>
                  </Media>
                 </Col>
                 <Col xs="6" sm="6" md="3">
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM6.value === null ? "#7c7c80" : "green"} id="SM6"/>
                          SM6
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM6" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                            Tín hiệu truyền:<h7 className={this.ConvertStatus(SM6.RF_signal)}> {SM6.RF_signal === null ? null : SM6.RF_signal}</h7><br/>
                            Dung lượng pin:<h7 className="text-success d-inline"> {SM6.battery === null ? null : SM6.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM6.value)}>{SM6.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM7.value === null ? "#7c7c80" : "green"} id="SM7"/>
                          SM7
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM7" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM7.RF_signal)}> {SM7.RF_signal === null ? null : SM7.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM7.battery === null ? null : SM7.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM7.value)}>{SM7.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM8.value === null ? "#7c7c80" : "green"} id="SM8"/>
                          SM8
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM8" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM8.RF_signal)}> {SM8.RF_signal === null ? null : SM8.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM8.battery === null ? null : SM8.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM8.value)}>{SM8.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM9.value === null ? "#7c7c80" : "green"} id="SM9"/>
                          SM9
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM9" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM9.RF_signal)}> {SM9.RF_signal === null ? null : SM9.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM9.battery === null ? null : SM9.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM9.value)}>{SM9.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM10.value === null ? "#7c7c80" : "green"} id="SM10"/>
                          SM10
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM10" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM10.RF_signal)}> {SM10.RF_signal === null ? null : SM10.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM10.battery === null ? null : SM10.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM10.value)}>{SM10.value}</h4>
                    </Media>
                  </Media>
                
                 </Col>
                 <Col xs="6" sm="6" md="3">
                 <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM11.value === null ? "#7c7c80" : "green"} id="SM11"/>
                          SM11
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM11" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM11.RF_signal)}> {SM11.RF_signal === null ? null : SM11.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM11.battery === null ? null : SM11.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM11.value)}>{SM11.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM12.value === null ? "#7c7c80" : "green"} id="SM12"/>
                          SM12
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM12" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM12.RF_signal)}> {SM12.RF_signal === null ? null : SM12.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM12.battery === null ? null : SM12.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM12.value)}>{SM12.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM13.value === null ? "#7c7c80" : "green"} id="SM13"/>
                          SM13
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM13" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM13.RF_signal)}> {SM13.RF_signal === null ? null : SM13.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM13.battery === null ? null : SM13.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM13.value)}>{SM13.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM14.value === null ? "#7c7c80" : "green"} id="SM14"/>
                          SM14
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM14" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM10.RF_signal)}> {SM14.RF_signal === null ? null : SM14.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM14.battery === null ? null : SM14.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM14.value)}>{SM14.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM15.value === null ? "#7c7c80" : "green"} id="SM15"/>
                          SM15
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM15" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM15.RF_signal)}> {SM15.RF_signal === null ? null : SM15.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM15.battery === null ? null : SM15.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM15.value)}>{SM15.value}</h4>
                    </Media>
                  </Media>
                
                 </Col>
                 <Col xs="6" sm="6" md="3">
                 <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM16.value === null ? "#7c7c80" : "green"} id="SM16"/>
                          SM16
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM16" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM16.RF_signal)}> {SM16.RF_signal === null ? null : SM16.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM16.battery === null ? null : SM16.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM16.value)}>{SM16.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM17.value === null ? "#7c7c80" : "green"} id="SM17"/>
                          SM17
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM17" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM17.RF_signal)}> {SM17.RF_signal === null ? null : SM17.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM17.battery === null ? null : SM17.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM17.value)}>{SM17.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM18.value === null ? "#7c7c80" : "green"} id="SM18"/>
                          SM18
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM18" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM18.RF_signal)}> {SM18.RF_signal === null ? null : SM18.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM18.battery === null ? null : SM18.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM18.value)}>{SM18.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM19.value === null ? "#7c7c80" : "green"} id="SM19"/>
                          SM19
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM19" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM19.RF_signal)}> {SM19.RF_signal === null ? null : SM19.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM19.battery === null ? null : SM19.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM19.value)}>{SM19.value}</h4>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <div className="d-inline-block mr-1">
                        <h4 className="font-weight-light 1">
                          <Slack className="feather-md  mb-1 mr-1" color={SM20.value === null ? "#7c7c80" : "green"} id="SM20"/>
                          SM20
                        </h4>
                      </div>
                      <UncontrolledPopover placement="left" target="SM20" trigger="hover" style={{width:"150px"}}>
                        <PopoverHeader>Thông tin cảm biến</PopoverHeader>
                        <PopoverBody>
                          Tín hiệu truyền:<h7 className={this.ConvertStatus(SM20.RF_signal)}> {SM20.RF_signal === null ? null : SM20.RF_signal}</h7><br/>
                          Dung lượng pin:<h7 className="text-success d-inline"> {SM20.battery === null ? null : SM20.battery + "%"} </h7>
                        </PopoverBody>
                      </UncontrolledPopover>
                      <h4 className={this.ConvertSM(SM20.value)}>{SM20.value}</h4>
                    </Media>
                  </Media>
                 </Col>
               </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    );
  }
}


export default Statistics;
