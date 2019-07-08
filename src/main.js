
if(process.env.NODE_ENV === 'production'){
  require('./build')
} else {
  
  require('./dev')

}