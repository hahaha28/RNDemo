import UIKit

class Bean:Codable {
  var key:String = ""
  var value: String = ""
  
  init(){}
}

var bean = Bean()
bean.key = "testkey"
bean.value = "testValue"

print(bean.key)

let jsonData = try JSONEncoder().encode(bean)
let jsonStr = String(data:jsonData, encoding: .utf8)
print(jsonStr)
