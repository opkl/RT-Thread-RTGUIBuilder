var page = {
    data: { result: '' },
    op: 'null',
    left: 0,

    onButton: function (e) {
        var result = this.data.result;
        console.dir(e);

        switch (e.target.id) {
            //���ݿؼ�ID����result�ؼ���ʾ
            case "num0":
            case "num1":
            case "num2":
            case "num3":
            case "num4":
            case "num5":
            case "num6":
            case "num7":
            case "num8":
            case "num9":
                //��ȡ��������ؼ���Ӧ��ֵ
                var num = e.target.id.substring(3, 4);
                console.log(num);

                if (result != '0') result += num;
                else result = num;

                break;
            case "numdot":
                if (result.indexOf(".") > 0) break;
                else if (result.length == 0) result = "0.";
                else result += ".";
                break;
            case "btnback"://�˸�
                if (result.length == 1) result = '';
                else result = result.substring(0, result.length - 1);
                break;

            case "btnDiv"://��
                if (result != '') {
                    this.op = "div";
                    this.left = Number(result);
                    result = '';
                }
                break;
            case "btnMul"://��
                if (result != '') {
                    this.op = "mul";
                    this.left = Number(result);
                    result = '';
                }
                break;

            case "btnSub"://��
                if (result != '') {
                    this.op = "minus";
                    this.left = Number(result);
                    result = '';
                }
                break;
            case "btnAdd"://��
                if (result != '') {
                    this.op = "plus";
                    this.left = Number(result);
                    result = '';
                }
                break;

            case "btnClear"://���
                result = '';
                break;

            case "btnEqu"://����
                if (this.op == 'null') break;

                //�������
                switch (this.op) {
                    case 'div'://��
                        var num = Number(result);

                        if (num == 0) result = 0;
                        else result = this.left / num;
                        break;
                    case 'mul'://��
                        result = this.left * Number(result);
                        break;
                    case 'minus'://��
                        result = this.left - Number(result);
                        break;
                    case 'plus'://��
                        result = this.left + Number(result);
                        break;
                }

                this.left = 0;
                result = String(result);
                this.op = 'null';
                break;
        }

        if (this.data.result != result) {
            this.data.result = result;
            //��ֵ��ˢ�¿ؼ�
            this.setData({ result: { value: this.data.result, refresh: true } });
        }
    },
};

Page(page);