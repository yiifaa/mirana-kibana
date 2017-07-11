//  专门用于字段的格式
const keyValues = {

    "sex.keyword" : "性别"
}

export default function(key) {

  let value = keyValues[key]
  if(!value) {
    return key
  }
  return value
}
