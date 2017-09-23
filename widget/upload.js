//---------------------------------------------------------------------------- Exports
const UPLOAD = {
	working (fileId,rule) {
		return new Promise((resolve, reject) => {
			try {
				let files = document.getElementById(fileId).files
				// 声明FormData对象
				let form = new FormData()
				form.append('rule', rule)
				// 遍历文件，追加到form对象上
				for (let i = 0, l = files.length; i < l; i++) {
					form.append(`file_${i}`, files[i])
				}
				// 上传文件，注意上传接口只允许统一使用upload
				Vue.http.post('/upload',form).then((res) => {
					if (parseInt(res.body.errcode) === 0) {
						resolve(res.body)
						return
					}

					resolve(res.body)
					
				})
			} catch (err) {
				alert(err)
				reject(err)
			}
		})
	}
}