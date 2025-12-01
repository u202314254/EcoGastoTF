package pe.edu.upc.dtos;
import pe.edu.upc.entities.Recurso;
import pe.edu.upc.entities.Usuario;
import java.time.LocalDate;


public class MetaDTO {
    private int idMeta;
    private Usuario usuario;
    private Recurso recurso;
    private String nombre;
    private boolean estado;
    private LocalDate fechainicio;
    private LocalDate fechafin;
    private double progreso;

    public int getIdMeta() {
        return idMeta;
    }

    public void setIdMeta(int idMeta) {
        this.idMeta = idMeta;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Recurso getRecurso() {
        return recurso;
    }

    public void setRecurso(Recurso recurso) {
        this.recurso = recurso;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public boolean isEstado() {
        return estado;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    public LocalDate getFechainicio() {
        return fechainicio;
    }

    public void setFechainicio(LocalDate fechainicio) {
        this.fechainicio = fechainicio;
    }

    public LocalDate getFechafin() {
        return fechafin;
    }

    public void setFechafin(LocalDate fechafin) {
        this.fechafin = fechafin;
    }

    public double getProgreso() {
        return progreso;
    }

    public void setProgreso(double progreso) {
        this.progreso = progreso;
    }
}
