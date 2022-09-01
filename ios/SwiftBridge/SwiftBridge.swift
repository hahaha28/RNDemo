//
//  SwiftBridge.swift
//  RNDemo
//
//  Created by Junjie Lin on 2022/9/1.
//

import Foundation

@objc(SwiftBridge)
class SwiftBridge: NSObject {
  
  @objc
  func test(_ param1:String, param2:String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock){
    let jsonDataBean = JsonDataBean()
    jsonDataBean.code = param1
    jsonDataBean.msg = param2
    do {
      let jsonData = try JSONEncoder().encode(jsonDataBean)
      let jsonStr = String(data:jsonData,encoding: .utf8)
      resolve(jsonStr)
    } catch {
      reject("error1","error2",nil)
    }
  }
}

class JsonDataBean: Codable{
  var code:String = ""
  var msg:String = ""

  init(){}
}
