export class Validatorsofinputs{
    validateNo(e): boolean {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false
        }
        return true
    }
}